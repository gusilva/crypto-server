import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AggregatedCoinModel, CoinModel } from './coin.schema';
import { CoinDto } from './coin.dto';

@Injectable()
export class CoinService {
  constructor(@InjectModel('Coin') private coinModel: Model<CoinModel>) {}

  async groupCoinById(): Promise<CoinDto[]> {
    const coins = await this.coinModel.aggregate([
      {
        $group: {
          _id: {
            id: '$id',
            symbol: '$symbol',
          },
          amount: { $sum: '$amount' },
        },
      },
    ]);

    return coins.map(CoinService.convertToCoinDto);
  }

  private static convertToCoinDto({
    _id,
    amount,
  }: AggregatedCoinModel): CoinDto {
    return {
      ..._id,
      amount,
    };
  }
}
