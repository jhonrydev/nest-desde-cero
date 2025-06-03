import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaintenanceController } from './type-maintenance.controller';
import { TypeMaintenanceService } from './type-maintenance.service';

describe('TypeMaintenanceController', () => {
  let controller: TypeMaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeMaintenanceController],
      providers: [TypeMaintenanceService],
    }).compile();

    controller = module.get<TypeMaintenanceController>(TypeMaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
