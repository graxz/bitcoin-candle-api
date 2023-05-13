import { Router } from "express";
import quantityUseCase from "../factory/factory-candles";

export const candleRouter = Router();

candleRouter.get('/:quantity', (req, res) => {
    const quantity = parseInt(req.params.quantity);
    const lastCandles = quantityUseCase.execute(quantity);
    res.json(lastCandles);
})