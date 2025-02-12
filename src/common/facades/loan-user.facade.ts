import { Injectable } from '@nestjs/common';
import { LoansService } from '../../loans/loans.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class LoanUserFacade {
  constructor(
    private readonly userService: UserService,
    private readonly loansService: LoansService,
  ) {}

  async createLoanForUser(userId: string, loanData: any) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.create(loanData);
    }
    throw new Error('User not found');
  }

  async getLoansByUser(userId: string) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.findAll(userId);
    }
    throw new Error('User not found');
  }

  async updateLoansByUser(userId: string, loanId: number, updateData: any) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.update(loanId, updateData);
    }
    throw new Error('User not found');
  }

  async deleteLoanByUser(userId: string, loanId: number) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      return this.loansService.remove(loanId);
    }
    throw new Error('User not found');
  }
}
