import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('acoes')
export class AcoesController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get('ping')
  findAll(@Req() request: Request): string {
    return 'pong';
  }
}
