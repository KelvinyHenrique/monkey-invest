import { Module, HttpModule } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    // MongooseModule.forFeature([UserFeatureProvider])
  ],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
