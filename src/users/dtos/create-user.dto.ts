import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsNumber()
  edad: number;
  
  @IsNotEmpty()
  @IsBoolean()
  activo: boolean;
  
  @IsNotEmpty()
  @IsString()
  rol: string;
}
