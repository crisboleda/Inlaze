import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../../domain/config/database.interface';
export declare class EnvironmentConfigService implements DatabaseConfig {
    private configService;
    constructor(configService: ConfigService);
    getDatabaseHost(): any;
    getDatabasePort(): any;
    getDatabaseUser(): any;
    getDatabasePassword(): any;
    getDatabaseName(): any;
}
