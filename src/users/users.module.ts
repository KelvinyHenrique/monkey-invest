import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersFeatureProvider } from './schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([UsersFeatureProvider])
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule { }