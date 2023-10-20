import { Repository } from 'typeorm';
import { RoleRepository } from '../../domain/repositories/roleRepository.interface';
import { Role } from 'src/domain/models/role.model';
export declare class DatabaseRoleRepository implements RoleRepository {
    private readonly roleEntityRepository;
    constructor(roleEntityRepository: Repository<Role>);
    private convertToRoleEntity;
    private convertToRole;
    insert(role: Role): Promise<Role>;
    findAll(): Promise<Role[]>;
    findById(id: number): Promise<Role>;
    updateById(id: number, name: string): Promise<void>;
    deleteById(id: number): Promise<void>;
}
