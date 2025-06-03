import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'varchar', length: 4 })
  edad: number;

  @Column({ default: false})
  activo: boolean;
  
  @Column({ type: 'varchar', length: 50 })
  rol: string;
}
