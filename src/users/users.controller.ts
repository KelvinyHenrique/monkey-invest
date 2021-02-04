import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  findOne(@Body('username') username: string) {
    return this.usersService.findOne(username);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() stockDto: CreateUserDTO): Promise<any> {
    return this.usersService.create(stockDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(@Body('id') id: string) {
    return this.usersService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() stockDto: UpdateUserDTO) {
    return this.usersService.update(stockDto);
  }

}
