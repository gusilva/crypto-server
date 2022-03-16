import { Controller, Get } from '@nestjs/common';
import { CoinService } from './coin.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinDto } from './coin.dto';

@ApiTags('Coins')
@Controller('coins')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get()
  @ApiOperation({ description: "Find all the coin's records" })
  @ApiOkResponse({
    description: 'Retrieve coin document(s)',
    type: [CoinDto],
  })
  async all(): Promise<CoinDto[]> {
    return this.coinService.listCoins();
  }
}
