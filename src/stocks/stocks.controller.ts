import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStockUserDto, UpdateStockUserDto } from './dto';
import { StocksService } from './stocks.service';

@UseGuards(JwtAuthGuard)
@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) { }
    @Get()
    findAll(@Request() req) {
        return this.stocksService.findAll(req.user.username);
    }

    @Get(":id")
    findOne(
        @Param("id") id: string,
        @Request() req
    ) {
        return this.stocksService.findOne(id, req.user.username);
    }

    @Post()
    async create(@Body() stockDto: CreateStockUserDto): Promise<any> {
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
