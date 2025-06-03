import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: uuidv4(),
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      edad: 28,
      activo: true,
      rol: 'admin',
    },
    {
      id: uuidv4(),
      nombre: 'María García',
      email: 'maria.garcia@example.com',
      edad: 32,
      activo: true,
      rol: 'usuario',
    },
    {
      id: uuidv4(),
      nombre: 'Carlos López',
      email: 'carlos.lopez@example.com',
      edad: 25,
      activo: false,
      rol: 'invitado',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user: User | undefined = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`el usuar con id ${id} no existe!`);
    }
    return user;
  }

  delete(id: string): string {
    const indexUser = this.users.findIndex((user) => user.id === id);
    this.users.splice(indexUser, 1);
    return id;
  }

  create(user: CreateUserDto): User {
    const newUser: User = { id: uuidv4(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, user: User): User {
    const userIndex: number = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`el usuar con id ${id} no existe!`);
    }

    this.users[userIndex] = user;
    const newUser: User = this.users[userIndex];
    return newUser;
  }
}
