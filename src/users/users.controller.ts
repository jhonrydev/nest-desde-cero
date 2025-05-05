import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  findAll(): User[] | undefined {
    try {
      return this.users.findAll();
    } catch (error) {
      console.error('Error',error);
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): User {
    return this.users.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): number {
    return this.users.delete(id);
  }
}
