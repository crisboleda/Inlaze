import { User } from './user.model';

export class Role {
  id: number;
  name: string;
  isDeleted: boolean;
  users: User[];
  createdAt: Date;
  updatedAt: Date;
}
