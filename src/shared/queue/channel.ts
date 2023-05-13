import { config } from 'dotenv';
import { Channel, connect } from 'amqplib';
import { Server } from 'socket.io';
import * as http from 'http';

import CandleRepository from '../../infra/database/repository/candle.repository';
import { Candle } from '../../infra/database/models/CandleModel';

config();

export default class CandleMessageChannel {
    private _channel: Channel;
    private _candleRepo: CandleRepository;
    private _io: Server;

    constructor(server: http.Server) {
        this._candleRepo = new CandleRepository();
        this._io = new Server(server, {
            cors: {
                origin: process.env.SOCKET_CLIENT_SERVER,
                methods: ["GET", "POST"]
            }
        });
        this._io.on('connection', () => {
            console.log('Web socket connection established...');
        });
    }

    private async _createMessageChannel() {
        try {
            const connection = await connect(process.env.AMQP_SERVER);
            this._channel = await connection.createChannel();
            await this._channel.assertQueue(process.env.QUEUE_NAME);
        } catch (err) {
            console.log('Connection to RabbitMQ failed...')
            console.log(err);
        }
    }

    async consumeMessages() {
        await this._createMessageChannel();

        if (this._channel) {
            this._channel.consume(process.env.QUEUE_NAME, async (message) => {
                const content = JSON.parse(message.content.toString());
                console.log('Message received...')
                console.log(content);

                this._channel.ack(message);

                const candle: Candle = content
                await this._candleRepo.save(candle);
                console.log('Candle saved in database...');

                this._io.emit(process.env.SOCKET_EVENT_NAME, candle);
                console.log('Candle emited by web socket...');
            })

            console.log('Candle consumer started...');
        }
    }
}