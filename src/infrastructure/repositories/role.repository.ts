import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleRepository } from '../../domain/repositories/roleRepository.interface';
import { Role as RoleEntity } from '../entities/role.entity';
import { Role } from '../../domain/models/role.model';

@Injectable()
export class DatabaseRoleRepository implements RoleRepository {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleEntityRepository: Repository<RoleEntity>,
  ) {}

  private convertToRoleEntity(role: Role): RoleEntity {
    const roleEntity: RoleEntity = new RoleEntity();

    roleEntity.id = role.id;
    roleEntity.name = role.name;
    roleEntity.isDeleted = role.isDeleted;
    roleEntity.createdAt = role.createdAt;
    roleEntity.updatedAt = role.updatedAt;

    return roleEntity;
  }

  private convertToRole(roleEntity: RoleEntity): Role {
    const role: Role = new Role();

    role.id = roleEntity.id;
    role.name = roleEntity.name;
    role.isDeleted = roleEntity.isDeleted;
    role.createdAt = roleEntity.createdAt;
    role.updatedAt = roleEntity.updatedAt;

    return role;
  }

  async insert(role: Role): Promise<Role> {
    const roleEntity = this.convertToRoleEntity(role);
    const result = await this.roleEntityRepository.insert(roleEntity);
    return this.convertToRole(result.generatedMaps[0] as Role);
  }

  async findAll(): Promise<Role[]> {
    const rolesEntities = await this.roleEntityRepository.find();
    return rolesEntities.map((roleEntity) => this.convertToRole(roleEntity));
  }

  async findById(id: number): Promise<Role> {
    const roleEntity = await this.roleEntityRepository.findOneOrFail({
      where: [{ id: id }],
    });
    return this.convertToRole(roleEntity);
  }

  updateById(id: number, name: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteById(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
