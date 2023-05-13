import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import { candleRouter } from './infra/routes/candles.routes';

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/candles', candleRouter);