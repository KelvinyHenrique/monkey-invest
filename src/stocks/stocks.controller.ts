import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('stocks')
export class StocksController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
