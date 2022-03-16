import { Module } from '@nestjs/common';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinSchema } from './coin.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Coin', schema: CoinSchema }])],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinModule {}
