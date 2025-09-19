import { Test, TestingModule } from '@nestjs/testing';
import { PassportsController } from './passports.controller';
import { PassportsService } from './passports.service';

describe('PassportsController', () => {
  let controller: PassportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassportsController],
      providers: [PassportsService],
    }).compile();

    controller = module.get<PassportsController>(PassportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
