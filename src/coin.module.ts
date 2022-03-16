import { Module } from '@nestjs/common';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
  imports: [],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinModule {}
