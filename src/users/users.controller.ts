import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  findAll(): User[] | undefined {
    try {
      return this.users.findAll();
    } catch (error) {
      console.error('Error', error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.users.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.users.delete(id);
  }

  @Post()
  create(@Body() user: CreateUserDto): User {
    console.log(user);

    return this.users.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User): User {
    return this.users.update(id, user);
  }
}
