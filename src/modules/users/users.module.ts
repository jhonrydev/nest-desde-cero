import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/users.entities';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Add your entities here
    providers:[UsersService],
    controllers:[UsersController]

})
export class UsersModule {}
