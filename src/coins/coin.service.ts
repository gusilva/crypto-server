import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoinModel } from './coin.schema';

@Injectable()
export class CoinService {
  constructor(@InjectModel('Coin') private coinModel: Model<CoinModel>) {}

  async listCoins(): Promise<CoinModel[]> {
    return this.coinModel.find({});
  }
}
