import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      edad: 28,
      activo: true,
      rol: 'admin',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@example.com',
      edad: 32,
      activo: true,
      rol: 'usuario',
    },
    {
      id: 3,
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

  findOne(id: number) {
    const user: User | undefined = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`el usuar con id ${id} no existe!`);
    }
    return user;
  }

  delete(id: number): number {
    const indexUser = this.users.findIndex((user) => user.id === id);
    this.users.splice(indexUser, 1);
    return id;
  }

  update(id: number, userData: User) {}
   
}
