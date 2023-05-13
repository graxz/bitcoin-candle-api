import { config } from 'dotenv';
import { app } from './app';
import { createConnectionMongoDB } from './infra/database/connection';
import CandleMessageChannel from './shared/queue/channel';

config();

const createServer = async () => {
    const port = process.env.PORT || 3000;

    await createConnectionMongoDB();


    const server = app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

    const candleMsgChannel = new CandleMessageChannel(server);
    candleMsgChannel.consumeMessages();

    process.on('SIGINT', () => {
        server.close();
        console.log('Server closed');
        process.exit(0);
    })
}

createServer();
