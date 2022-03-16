import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoinModel } from './coin.schema';
import { CoinDto } from './coin.dto';

@Injectable()
export class CoinService {
  constructor(@InjectModel('Coin') private coinModel: Model<CoinModel>) {}

  async groupCoinById(): Promise<CoinDto[]> {
    // return this.coinModel.find({});
    return this.coinModel.aggregate([
      {
        $group: {
          _id: '$id',
          amount: { $sum: '$amount' },
        },
      },
    ]);
  }
}
