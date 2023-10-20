import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './infrastructure/controllers/role.controller';
import { Role } from './infrastructure/entities/role.entity';
import { RoleService } from './services/role.service';
import { User } from './infrastructure/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'toor690',
      database: 'users_administration',
      entities: [Role, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Role, User]),
  ],
  providers: [RoleService],
  controllers: [RoleController],
})
export class AppModule {}
