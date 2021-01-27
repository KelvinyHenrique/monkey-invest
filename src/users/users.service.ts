import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { Users, UsersFeatureProvider } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UsersFeatureProvider.name) private readonly usersModel: ReturnModelType<typeof Users>,
    ) { }


    // READ
    public async findAll() {
        return this.usersModel.find().exec();
    }

    // CREATE
    public async create(userUserDto: CreateUserDTO) {
        const created = new this.usersModel(userUserDto);
        return created.save();
    }

    // DELETE
    public async delete(id: string) {
        return this.usersModel.findByIdAndDelete(id);
    }

    // UPDATE
    public async update(userUserDto: UpdateUserDTO) {
        return this.usersModel.updateOne({ _id: userUserDto.id }, userUserDto).exec();
    }
}
