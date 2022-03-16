import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinModule } from './coins/coin.module';

@Module({
  imports: [CoinModule, MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class AppModule {}
