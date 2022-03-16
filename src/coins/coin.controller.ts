import { Controller, Get } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinModel } from './coin.schema';

@Controller('coins')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get()
  async all(): Promise<CoinModel[]> {
    return this.coinService.listCoins();
  }
}
