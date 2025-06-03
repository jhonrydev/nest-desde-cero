import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaintenanceService } from './type-maintenance.service';

describe('TypeMaintenanceService', () => {
  let service: TypeMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeMaintenanceService],
    }).compile();

    service = module.get<TypeMaintenanceService>(TypeMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
