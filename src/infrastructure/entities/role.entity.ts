import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 25, nullable: false, unique: true })
  name: string;

  @Column('boolean', { default: false, name: 'is_deleted' })
  isDeleted: boolean;

  @OneToMany(() => User, (user: User) => user.role)
  users: User[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
