import { Role } from '../domain/models/role.model';
import { RoleRepository } from '../domain/repositories/roleRepository.interface';
export declare class CreateRoleUseCase {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    execute(role: Role): Promise<Role>;
}
