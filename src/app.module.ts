import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcoesController } from './acoes/acoes.controller';

@Module({
  imports: [],
  controllers: [AppController, AcoesController],
  providers: [AppService],
})
export class AppModule {}
