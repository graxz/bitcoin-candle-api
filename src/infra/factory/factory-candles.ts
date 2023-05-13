import QuantityUseCase from "../../application/use-cases/quantity.use-case";
import CandleRepository from "../database/repository/candle.repository";

const candlesRepository = new CandleRepository();
const quantityUseCase = new QuantityUseCase(candlesRepository);

export default quantityUseCase;
