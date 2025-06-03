import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeMaintenanceDto } from './create-type-maintenance.dto';

export class UpdateTypeMaintenanceDto extends PartialType(CreateTypeMaintenanceDto) {}
