import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoansService } from './loans.service';
import { Loan } from './entities/loan.entity';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';

@Resolver(() => Loan)
export class LoansResolver {
  constructor(private readonly loansService: LoansService) {}

  @Mutation(() => Loan)
  createLoan(@Args('createLoanInput') createLoanInput: CreateLoanInput) {
    return this.loansService.create(createLoanInput);
  }

  @Query(() => [Loan], { name: 'loans' })
  findAll(@Args('userId', { type: () => String }) userId: string) {
    return this.loansService.findAll(userId);
  }

  @Query(() => Loan, { name: 'loan' })
  findOne(@Args('id', { type: () => Loan['id'] }) id: Loan['id']) {
    return this.loansService.findOne(id);
  }

  @Mutation(() => Loan)
  updateLoan(@Args('updateLoanInput') updateLoanInput: UpdateLoanInput) {
    return this.loansService.update(updateLoanInput.id, updateLoanInput);
  }

  @Mutation(() => Loan)
  removeLoan(@Args('id', { type: () => Loan['id'] }) id: string) {
    return this.loansService.remove(id);
  }
}
