import { Module, HttpModule } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksFeatureProvider } from './schemas/stocks.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([StocksFeatureProvider])
  ],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
