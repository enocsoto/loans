import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(() => Float)
  amount: number;

  @Field(() => Int)
  duration: number;

  @Field(() => Float)
  interestRate: number;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  status: string;
}
