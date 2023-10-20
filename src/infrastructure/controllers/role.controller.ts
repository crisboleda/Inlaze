import { Controller, Post, Body } from '@nestjs/common';
import { AddRoleDto } from './role.dto';
import { CreateRoleUseCase } from 'src/usecases/insertRole.usecases';
import { DatabaseRoleRepository } from '../repositories/role.repository';

@Controller('roles')
export class RoleController {
  @Post()
  async addTodo(@Body() addRoleDto: AddRoleDto) {
    const { name } = addRoleDto;
    console.log(name);
  }
}
