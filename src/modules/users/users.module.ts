import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { User, UserSchemaFactory } from './entities/user.entity';
import {
	FlashCard,
	FlashCardSchema,
} from '../flash-cards/entities/flash-card.entity';
import { UsersRepository } from '@/repositories/base';

@Module({
	imports: [
		MongooseModule.forFeatureAsync([
			{
				name: User.name,
				useFactory: UserSchemaFactory,
				inject: [getModelToken(FlashCard.name)],
				imports: [
					MongooseModule.forFeature([
						{
							name: FlashCard.name,
							schema: FlashCardSchema,
						},
					]),
				],
			},
		]),
	],
	controllers: [UsersController],
	providers: [
		UsersService,
		{
			provide: 'UsersRepositoryInterface',
			useClass: UsersRepository,
		},
	],
})
export class UsersModule {}
