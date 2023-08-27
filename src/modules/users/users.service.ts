import { BaseServiceAbstract } from '@/services/base/base.abstract.service';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities';
import { UsersRepositoryInterface } from './interfaces';

@Injectable()
export class UsersService extends BaseServiceAbstract<User> {
	constructor(
		@Inject('UsersRepositoryInterface')
		private readonly userRepository: UsersRepositoryInterface,
	) {
		super(userRepository);
	}
}
