import { Injectable } from '@nestjs/common';
import { CreateTypeMaintenanceDto } from './dto/create-type-maintenance.dto';
import { UpdateTypeMaintenanceDto } from './dto/update-type-maintenance.dto';

@Injectable()
export class TypeMaintenanceService {
  create(createTypeMaintenanceDto: CreateTypeMaintenanceDto) {
    return 'This action adds a new typeMaintenance';
  }

  findAll() {
    return `This action returns all typeMaintenance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeMaintenance`;
  }

  update(id: number, updateTypeMaintenanceDto: UpdateTypeMaintenanceDto) {
    return `This action updates a #${id} typeMaintenance`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeMaintenance`;
  }
}
