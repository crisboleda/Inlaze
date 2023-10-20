import { User } from '../models/user.model';
export interface UserRepository {
    insert(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    updateById(id: number, fullName: string, phone: number, email: string): Promise<void>;
    deleteById(id: number): Promise<void>;
}
