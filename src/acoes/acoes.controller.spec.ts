import { Test, TestingModule } from '@nestjs/testing';
import { AcoesController } from './acoes.controller';

describe('AcoesController', () => {
  let controller: AcoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcoesController],
    }).compile();

    controller = module.get<AcoesController>(AcoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
