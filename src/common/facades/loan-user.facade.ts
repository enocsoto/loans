import { Injectable } from '@nestjs/common';
import { LoansService } from '../../loans/loans.service';
import { UserService } from '../../user/user.service';
import { CreateLoanInput } from '../../loans/dto/create-loan.input';
import { User } from '../../user/entities/user.entity';
import { UpdateLoanInput } from '../../loans/dto/update-loan.input';
import { Loan } from '../../loans/entities/loan.entity';

@Injectable()
export class LoanUserFacade {
  constructor(
    private readonly userService: UserService,
    private readonly loansService: LoansService,
  ) {}

  async createLoanForUser(loanData: CreateLoanInput) {
    const { userId } = loanData;
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.create(loanData);
    }
    throw new Error('User not found');
  }

  async getLoansByUser(userId: User['id']) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.findAll(userId);
    }
    throw new Error('User not found');
  }

  async updateLoansByUser(loanId: Loan['id'], updateData: UpdateLoanInput) {
    const { userId } = updateData;
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.update(loanId, updateData);
    }
    throw new Error('User not found');
  }

  async deleteLoanByUser(userId: User['id'], loanId: Loan['id']) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.remove(loanId);
    }
    throw new Error('User not found');
  }
}
