import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../../domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): any {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): any {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): any {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): any {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): any {
    return this.configService.get<string>('DATABASE_NAME');
  }
}
