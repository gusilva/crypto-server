import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoinService } from './coin.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinDto, UpdateCoinDto } from './coin.dto';

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
  async add(@Body() coinDto: CoinDto) {
    return this.coinService.addCoin(coinDto);
  }

  @Put(':id')
  @ApiOperation({ description: 'Update coin' })
  async update(@Param('id') id: string, @Body() coinDto: UpdateCoinDto) {
    return this.coinService.updateCoin(id, coinDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coinService.deleteCoin(id);
  }
}
