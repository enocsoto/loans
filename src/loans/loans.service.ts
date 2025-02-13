import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) {}
  async create(createLoanInput: CreateLoanInput) {
    try {
      const loan = this.loanRepository.create(createLoanInput);
      return await this.loanRepository.save(loan);
    } catch (error) {
      throw new BadRequestException('Error creating loan');
    }
  }

  async findAll(userId: string) {
    try {
      const loans = await this.loanRepository.find({
        where: { userId },
        relations: ['user'],
      });
      return loans;
    } catch (error) {
      throw new BadRequestException('Error finding loans');
    }
  }

  async findOne(id: Loan['id']) {
    try {
      const loan = await this.loanRepository.findOne({
        where: { id },
        relations: ['user'],
      });
      return loan;
    } catch (error) {
      throw new BadRequestException('Error finding loan');
    }
  }

  async update(
    id: Loan['id'],
    updateLoanInput: UpdateLoanInput,
  ): Promise<Loan> {
    const { amount, duration, interestRate, status } = updateLoanInput;
    try {
      const loan = await this.loanRepository.preload({
        id,
      });
      return this.loanRepository.save({
        ...loan,
        amount,
        duration,
        interestRate,
        status,
      });
    } catch (error) {
      throw new BadRequestException('Error updating loan');
    }
  }

  async remove(id: Loan['id']) {
    try {
      const loan = this.findOne(id);
      await this.loanRepository.update(id, { status: 'CANCELLED' });
      return loan;
    } catch (error) {}
  }
}
