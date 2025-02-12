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
  create(createLoanInput: CreateLoanInput) {
    try {
      const loan = this.loanRepository.create(createLoanInput);
      return this.loanRepository.save(loan);
    } catch (error) {
      throw new BadRequestException('Error creating loan');
    }
  }

  findAll(userId: string) {
    try {
      const loans = this.loanRepository.find({
        where: { userId },
        relations: ['user'],
      });
      return loans;
    } catch (error) {
      throw new BadRequestException('Error finding loans');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number, updateLoanInput: UpdateLoanInput) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
