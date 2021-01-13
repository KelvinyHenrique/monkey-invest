import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksController } from './stocks/stocks.controller';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { StocksService } from './stocks/stocks.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    StocksController,
    UsersController,
    AuthController,
  ],
  providers: [AppService, StocksService],
})
export class AppModule {}
