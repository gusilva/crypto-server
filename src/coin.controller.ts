import { Controller, Get } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller()
export class CoinController {
  constructor(private readonly appService: CoinService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
