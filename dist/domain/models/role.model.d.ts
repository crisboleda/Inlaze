import { User } from './user.model';
export declare class Role {
    id: number;
    name: string;
    isDeleted: boolean;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
