import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const logger = new Logger(bootstrap.name);
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);
	await app.listen(configService.get('PORT') || 4000, () => {
		logger.log(
			`Application running on port http://localhost:${
				configService.get('PORT') || 4000
			}`,
		);
	});
}
bootstrap();
