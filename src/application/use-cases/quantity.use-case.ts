import CandleRepository from "../../infra/database/repository/candle.repository";

export default class QuantityUseCase {
    constructor(
        private candleRepo: CandleRepository
    ) { }

    async execute(quantity: number) {
        const lastCandles = await this.candleRepo.findLastCandles(quantity);

        return lastCandles;
    }
}
