import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateStockUserDto, UpdateStockUserDto } from './dto';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}
  @Get()
  findAll():any {
    return this.stocksService.findAll();
  }

  @Post()
  async create(@Body() stockDto: CreateStockUserDto):Promise<any> {
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
