import { User } from '@/modules/users/entities';
import { BaseRepositoryAbstract } from './base.abstract.repository';
import { UsersRepositoryInterface } from '@/modules/users/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UsersRepository
	extends BaseRepositoryAbstract<User>
	implements UsersRepositoryInterface
{
	constructor(@InjectModel(User.name) private userRepository: Model<User>) {
		super(userRepository);
	}
}
