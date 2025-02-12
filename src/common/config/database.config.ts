import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (): TypeOrmModuleOptions => {
    const configService = new ConfigService();
    return {
        type: 'postgres',
        host: configService.get('DATABASE_HOST') || 'localhost',
        port: +configService.get('DATABASE_PORT') || 5432,
        username: configService.get('DATABASE_USER') || 'your_user',
        password: configService.get('DATABASE_PASSWORD') || 'your_password',
        database: configService.get('DATABASE_NAME') || 'your_database',
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'], 
        synchronize: true, 
        logging: true,
    };
};