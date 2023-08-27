import { BaseEntity } from '@/modules/shared/base';
import { BaseServiceInterface } from './base.interface.service';
import { FindAllResponse } from '@/types/common.type';
import { BaseRepositoryInterface } from '@/repositories/base';

export abstract class BaseServiceAbstract<T extends BaseEntity>
	implements BaseServiceInterface<T>
{
	constructor(private readonly repository: BaseRepositoryInterface<T>) {}

	async create(create_dto: T | any): Promise<T> {
		return await this.repository.create(create_dto);
	}

	async findAll(
		filter?: object,
		projection?: string | object,
		options?: object,
	): Promise<FindAllResponse<T>> {
		return await this.repository.findAll(filter, projection, options);
	}

	async findOne(id: string) {
		return await this.repository.findOneById(id);
	}

	async findOneByCondition(filter: Partial<T>) {
		return await this.repository.findOneByCondition(filter);
	}

	async update(id: string, update_dto: Partial<T>) {
		return await this.repository.update(id, update_dto);
	}

	async remove(id: string) {
		return await this.repository.softDelete(id);
	}
}
