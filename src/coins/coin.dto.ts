import { ApiProperty } from '@nestjs/swagger';

export class CoinDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  amount: number;
}
