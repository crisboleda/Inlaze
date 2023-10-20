import { Module } from '@nestjs/common';
import { DatabaseRoleRepository } from './role.repository';

@Module({
  providers: [DatabaseRoleRepository],
  exports: [DatabaseRoleRepository],
})
export class RepositoriesModule {}
