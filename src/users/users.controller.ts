import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() stockDto: CreateUserDTO):Promise<any> {
      return this.usersService.create(stockDto);
    }
  
    @Delete()
    async delete(@Body("id") id: string) {
      return this.usersService.delete(id);
    }
    
    @Put()
    async update(@Body() stockDto: UpdateUserDTO) {
      return this.usersService.update(stockDto);
    }

}
