import { Injectable } from '@nestjs/common';
import { Stock } from './interfaces/stock.interface';

@Injectable()
export class StocksService {
  private readonly stocks: Stock[] = [];

  create(stock: Stock) {
    this.stocks.push(stock);
  }
  findAll(): Stock[] {
    return this.stocks;
  }
}
