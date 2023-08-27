import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig, databaseConfig } from './configs/configuration.config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { UserRolesModule } from './modules/user-roles/user-roles.module';
import { FlashCardsModule } from './modules/flash-cards/flash-cards.module';
import { TopicsModule } from './modules/topics/topics.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
			load: [databaseConfig],
			cache: true,
			expandVariables: true,
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				uri: configService.get<DatabaseConfig>('database').uri,
				dbName: configService.get<DatabaseConfig>('database').host,
			}),
			inject: [ConfigService],
		}),
		UsersModule,
		UserRolesModule,
		FlashCardsModule,
		TopicsModule,
		CollectionsModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
