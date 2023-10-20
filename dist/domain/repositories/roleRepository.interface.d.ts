import { Role } from '../models/role.model';
export interface RoleRepository {
    insert(Role: Role): Promise<Role>;
    findAll(): Promise<Role[]>;
    findById(id: number): Promise<Role>;
    updateById(id: number, name: string): Promise<void>;
    deleteById(id: number): Promise<void>;
}
