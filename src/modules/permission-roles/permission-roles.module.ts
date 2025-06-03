import { Module } from '@nestjs/common';
import { PermissionRolesService } from './permission-roles.service';
import { PermissionRolesController } from './permission-roles.controller';

@Module({
  controllers: [PermissionRolesController],
  providers: [PermissionRolesService],
})
export class PermissionRolesModule {}
