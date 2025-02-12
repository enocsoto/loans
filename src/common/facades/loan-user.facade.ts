// src/common/facades/loan-user.facade.ts
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

  // Otros métodos que combinen funcionalidades de ambos módulos
}
