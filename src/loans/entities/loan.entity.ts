import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entities/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Entity('loan')
export class Loan extends BaseEntity {
  @Field(() => Float)
  @Column()
  amount: number;

  @Field(() => Int)
  @Column()
  duration: number; // Duración del préstamo en meses

  @Field(() => Float)
  @Column()
  interestRate: number; // Tasa de interés

  @Field(() => String)
  @Column()
  userId: string; // ID del usuario que solicitó el préstamo

  @Field(() => String)
  @Column()
  status: string; // Estado del préstamo (por ejemplo, 'pending', 'approved', 'rejected')

  @Field(() => User) // Esto permite que GraphQL devuelva el usuario asociado
  @ManyToOne(() => User, (user) => user.loans) // Relación inversa en la entidad User
  user: User; // Relación 1 a muchos (uno a muchos)
}
