import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeMaintenanceService } from './type-maintenance.service';
import { CreateTypeMaintenanceDto } from './dto/create-type-maintenance.dto';
import { UpdateTypeMaintenanceDto } from './dto/update-type-maintenance.dto';

@Controller('type-maintenance')
export class TypeMaintenanceController {
  constructor(private readonly typeMaintenanceService: TypeMaintenanceService) {}

  @Post()
  create(@Body() createTypeMaintenanceDto: CreateTypeMaintenanceDto) {
    return this.typeMaintenanceService.create(createTypeMaintenanceDto);
  }

  @Get()
  findAll() {
    return this.typeMaintenanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeMaintenanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeMaintenanceDto: UpdateTypeMaintenanceDto) {
    return this.typeMaintenanceService.update(+id, updateTypeMaintenanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeMaintenanceService.remove(+id);
  }
}
