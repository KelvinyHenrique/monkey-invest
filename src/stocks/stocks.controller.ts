import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { StockDto } from './dto/Stock.dto';
import { UpdateStockUserDto } from './dto/update-stock-user';
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

  @Delete()
  async delete(@Body("id") id: string) {
    return this.stocksService.delete(id);
  }
  
  @Put()
  async update(@Body() stockDto: UpdateStockUserDto) {
    return this.stocksService.update(stockDto);
  }


}
