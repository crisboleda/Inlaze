import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 100, nullable: false, name: 'full_name' })
  fullName: string;

  @Column('varchar', { length: 60, nullable: false })
  email: string;

  @Column('varchar', { length: 80, nullable: false })
  password: string;

  @Column('int', { nullable: true })
  phone: number;

  @ManyToOne(() => Role, (role: Role) => role.users)
  role: Role;

  @Column('boolean', { default: false, name: 'is_deleted' })
  isDeleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
