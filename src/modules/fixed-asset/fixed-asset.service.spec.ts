import { Test, TestingModule } from '@nestjs/testing';
import { FixedAssetService } from './fixed-asset.service';

describe('FixedAssetService', () => {
  let service: FixedAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixedAssetService],
    }).compile();

    service = module.get<FixedAssetService>(FixedAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
