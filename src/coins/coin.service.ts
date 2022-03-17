import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoinModel } from './coin.schema';
import { CoinDto } from './coin.dto';

@Injectable()
export class CoinService {
  constructor(@InjectModel('Coin') private coinModel: Model<CoinModel>) {}

  async listAllCoins(): Promise<CoinModel[]> {
    return this.coinModel.find({}).exec();
  }

  async addCoin(coinDto: CoinDto): Promise<CoinModel> {
    const coin = await this.coinModel.findOne({ id: coinDto.id }).exec();

    if (coin) {
      coin.amount = coin.amount + coinDto.amount;
      return coin.save();
    } else {
      return this.coinModel.create(coinDto);
    }
  }
}
