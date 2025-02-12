import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansResolver } from './loans.resolver';
import { Loan } from './entities/loan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [LoansResolver, LoansService],
  exports: [LoansService, TypeOrmModule],
})
export class LoansModule {}
