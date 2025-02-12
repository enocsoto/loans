// src/common/common.module.ts
import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonResolver } from './common.resolver';
import { UserService } from '../user/user.service';
import { LoansService } from '../loans/loans.service';
import { LoanUserFacade } from './facades/loan-user.facade';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loan } from 'src/loans/entities/loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Loan])],
  providers: [
    CommonService,
    CommonResolver,
    UserService,
    LoansService,
    LoanUserFacade,
  ],
  exports: [
    LoanUserFacade,
    CommonService,
    CommonResolver,
    UserService,
    LoansService,
  ],
})
export class CommonModule {}
