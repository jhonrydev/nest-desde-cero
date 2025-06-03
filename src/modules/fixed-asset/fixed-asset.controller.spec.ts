import { Test, TestingModule } from '@nestjs/testing';
import { FixedAssetController } from './fixed-asset.controller';
import { FixedAssetService } from './fixed-asset.service';

describe('FixedAssetController', () => {
  let controller: FixedAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixedAssetController],
      providers: [FixedAssetService],
    }).compile();

    controller = module.get<FixedAssetController>(FixedAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
