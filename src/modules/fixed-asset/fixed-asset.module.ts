import { Module } from '@nestjs/common';
import { FixedAssetService } from './fixed-asset.service';
import { FixedAssetController } from './fixed-asset.controller';

@Module({
  controllers: [FixedAssetController],
  providers: [FixedAssetService],
})
export class FixedAssetModule {}
