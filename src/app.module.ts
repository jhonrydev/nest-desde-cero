import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from '@modules/status/status.module';
import { UsersModule } from '@modules/users/users.module';
import { CategoryModule } from '@modules/category/category.module';
import { PositionModule } from '@modules/position/position.module';
import { RoleModule } from '@modules/role/role.module';
import { DepartmentModule } from '@modules/department/department.module';
import { BrandModule } from '@modules/brand/brand.module';
import { FixedAssetModule } from '@modules/fixed-asset/fixed-asset.module';
import { TypeMaintenanceModule } from '@modules/type-maintenance/type-maintenance.module';
import { MaintenanceModule } from '@modules/maintenance/maintenance.module';
import { PermissionRolesModule } from './modules/permission-roles/permission-roles.module';
import { PermissionModule } from './modules/permission/permission.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo, no usar en producción
    }),
    UsersModule,
    StatusModule,
    CategoryModule,
    PositionModule,
    RoleModule,
    DepartmentModule,
    BrandModule,
    FixedAssetModule,
    TypeMaintenanceModule,
    MaintenanceModule,
    PermissionRolesModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
