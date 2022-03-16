import { NestFactory } from '@nestjs/core';
import { CoinModule } from './coin.module';

async function bootstrap() {
  const app = await NestFactory.create(CoinModule);
  await app.listen(3000);
}
bootstrap();
