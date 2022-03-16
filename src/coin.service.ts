import { Injectable } from '@nestjs/common';

@Injectable()
export class CoinService {
  getHello(): string {
    return 'Hello World!';
  }
}
