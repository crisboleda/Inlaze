import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { RoleController } from './infrastructure/controllers/role.controller';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
  controllers: [RoleController],
})
export class AppModule {}
