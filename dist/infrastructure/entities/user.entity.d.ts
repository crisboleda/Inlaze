import { Role } from './role.entity';
export declare class User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phone: number;
    role: Role;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
