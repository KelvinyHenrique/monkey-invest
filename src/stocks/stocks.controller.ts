import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { StockDto } from './dto/Stock.dto';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}
  @Get()
  findAll():any {
    return this.stocksService.findAll();
  }

  @Post()
  async create(@Body() stockDto: StockDto):Promise<any> {
    return this.stocksService.create(stockDto);
  }
}
