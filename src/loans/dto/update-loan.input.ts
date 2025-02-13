import { CreateLoanInput } from './create-loan.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLoanInput extends PartialType(CreateLoanInput) {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  userId: string;
}
