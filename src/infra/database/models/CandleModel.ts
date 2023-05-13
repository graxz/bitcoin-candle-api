import { Model, Document, Schema, model } from 'mongoose';

export interface Candle extends Document {
    open: number;
    close: number;
    high: number;
    low: number;
    color: string;
    finalDateTime: Date;
    currency: string;
}

const schema = new Schema<Candle>({
    open: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    finalDateTime: {
        type: Date,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
})

export const CandleModel: Model<Candle> = model<Candle>('Candle', schema);
