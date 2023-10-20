import { Role } from './role.model';
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
