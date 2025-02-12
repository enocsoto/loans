import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export abstract class BaseEntity {
  @Field(() => ID, { description: 'ID of the entity', nullable: false })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date, {
    description: 'Creation date of the entity',
    nullable: false,
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field(() => Date, {
    description: 'Last update date of the entity',
    nullable: true,
  })
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @Field(() => Date, {
    description: 'Deletion date of the entity',
    nullable: true,
  })
  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
