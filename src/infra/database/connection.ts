import { config } from 'dotenv';
import { connect } from 'mongoose';

config();

export const createConnectionMongoDB = async () => {
    const uri = process.env.MONGO_CONNECTION_URL || '';

    console.log(`Connecting to ${uri}`)
    await connect(uri);
};
