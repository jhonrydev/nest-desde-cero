import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FixedAssetService } from './fixed-asset.service';
import { CreateFixedAssetDto } from './dto/create-fixed-asset.dto';
import { UpdateFixedAssetDto } from './dto/update-fixed-asset.dto';

@Controller('fixed-asset')
export class FixedAssetController {
  constructor(private readonly fixedAssetService: FixedAssetService) {}

  @Post()
  create(@Body() createFixedAssetDto: CreateFixedAssetDto) {
    return this.fixedAssetService.create(createFixedAssetDto);
  }

  @Get()
  findAll() {
    return this.fixedAssetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixedAssetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFixedAssetDto: UpdateFixedAssetDto) {
    return this.fixedAssetService.update(+id, updateFixedAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixedAssetService.remove(+id);
  }
}
