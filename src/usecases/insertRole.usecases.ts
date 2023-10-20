import { Role } from '../domain/models/role.model';
import { RoleRepository } from '../domain/repositories/roleRepository.interface';

export class CreateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(role: Role): Promise<Role> {
    return await this.roleRepository.insert(role);
  }
}
