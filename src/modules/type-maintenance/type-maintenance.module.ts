import { Module } from '@nestjs/common';
import { TypeMaintenanceService } from './type-maintenance.service';
import { TypeMaintenanceController } from './type-maintenance.controller';

@Module({
  controllers: [TypeMaintenanceController],
  providers: [TypeMaintenanceService],
})
export class TypeMaintenanceModule {}
