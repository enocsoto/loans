import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommonService } from './common.service';
import { BaseEntity } from './entities/base.entity';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';

@Resolver(() => BaseEntity)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Mutation(() => BaseEntity)
  createCommon(@Args('createCommonInput') createCommonInput: CreateCommonInput) {
    return this.commonService.create(createCommonInput);
  }

  @Query(() => [BaseEntity], { name: 'common' })
  findAll() {
    return this.commonService.findAll();
  }

  @Query(() => BaseEntity, { name: 'common' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.findOne(id);
  }

  @Mutation(() => BaseEntity)
  updateCommon(@Args('updateCommonInput') updateCommonInput: UpdateCommonInput) {
    return this.commonService.update(updateCommonInput.id, updateCommonInput);
  }

  @Mutation(() => BaseEntity)
  removeCommon(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.remove(id);
  }
}
