import CandleRepository from "../../infra/database/repository/candle.repository";

export default class QuantityUseCase {
    constructor(
        private candleRepo: CandleRepository
    ) { }

    execute(quantity: number) {
        const lastCandles = this.candleRepo.findLastCandles(quantity);
        return lastCandles;
    }
}
