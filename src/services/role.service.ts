import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../infrastructure/entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  /**
   * Create a Role
   * @param name Role name
   * @returns Role
   */
  async createRole(name: string): Promise<Role> {
    const role = this.roleRepository.create({ name });
    return this.roleRepository.save(role);
  }

  /**
   * Get all Roles
   * @returns Role[]
   */
  async getRoles(): Promise<Role[]> {
    const roles = await this.roleRepository.find();
    return roles;
  }

  /**
   * Get a Role with specify ID
   * @param id Role ID
   * @returns Role
   */
  async getRoleById(id: number): Promise<Role> {
    return await this.roleRepository.findOne({
      where: [{ id: id }],
    });
  }

  /**
   * Delete a Role with specify ID
   * @param id Role ID
   * @returns Role
   */
  async deleteRoleById(id: number): Promise<Role> {
    await this.roleRepository.update(
      {
        id: id,
      },
      { isDeleted: true },
    );

    return await this.getRoleById(id);
  }

  /**
   * Update name of Role with specify ID
   * @param id Role ID
   * @param name Role Name
   * @returns Role
   */
  async updateRoleById(id: number, name: string): Promise<Role> {
    await this.roleRepository.update(
      {
        id: id,
      },
      { name: name },
    );

    return await this.getRoleById(id);
  }
}
