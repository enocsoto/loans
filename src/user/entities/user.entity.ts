import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entities/base.entity';
import { ValidRoles } from 'src/auth/enum/valid-roles.enum';
import { Loan } from 'src/loans/entities/loan.entity';

@ObjectType('User')
@Entity('user')
export class User extends BaseEntity {
  @Field(() => String, { description: 'FullName of the user', nullable: false })
  @Column({ type: 'varchar', length: 100 })
  fullName: string;

  @Field(() => String, { description: 'Email of the user', nullable: false })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Field(() => String, { description: 'Password of the user', nullable: false })
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Field(() => [ValidRoles], {
    description: 'Roles of the user',
    nullable: false,
  })
  @Column({ type: 'text', array: true, default: ['user'] })
  roles: ValidRoles[];

  @Field(() => Number, {
    description: 'Document number of the user',
    nullable: false,
  })
  @Column({ type: 'int' })
  dni: number;

  @Field(() => Boolean, {
    description: 'Is active of the user',
    nullable: false,
  })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.lastUpdateBy, {
    nullable: true,
    lazy: true,
  })
  @JoinColumn({ name: 'lastUpdateBy' })
  @Field(() => User, { nullable: true })
  lastUpdateBy?: User;
  @Field(() => [Loan]) // Esto permite que GraphQL devuelva los préstamos asociados
  @OneToMany(() => Loan, (loan) => loan.user) // Relación inversa en la entidad Loan
  loans: Loan[]; // Relación con los préstamos
}
