import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AddRoleDto, UpdateRoleDto } from './role.dto';
import { RoleService } from '../../services/role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async addRole(@Body() addRoleDto: AddRoleDto) {
    const { name } = addRoleDto;
    return this.roleService.createRole(name);
  }

  @Get()
  async getRoles() {
    const roles = this.roleService.getRoles();
    return roles;
  }

  @Get('/:id')
  async getRole(@Param() params: { id: number }) {
    const role = this.roleService.getRoleById(params.id);
    return role;
  }

  @Put('/:id')
  async updateRole(
    @Body() updateRoleDto: UpdateRoleDto,
    @Param() params: { id: number },
  ) {
    const role = this.roleService.updateRoleById(params.id, updateRoleDto.name);
    return role;
  }

  @Delete('/:id')
  async deleteRole(@Param() params: { id: number }) {
    const role = this.roleService.deleteRoleById(params.id);
    return role;
  }
}
