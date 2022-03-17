import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoinService } from './coin.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinDto } from './coin.dto';

@ApiTags('Coins')
@Controller('coins')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get()
  @ApiOperation({ description: "Find all the coin's records" })
  async all() {
    return this.coinService.listAllCoins();
  }

  @Post()
  @ApiOperation({ description: 'Update coin' })
  @ApiCreatedResponse({
    description: 'Coin document',
    type: CoinDto,
  })
  async add(@Body() coinDto: CoinDto) {
    return this.coinService.addCoin(coinDto);
  }
}
