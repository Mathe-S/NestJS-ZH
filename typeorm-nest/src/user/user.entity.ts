/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookEntity } from 'src/book/book.entiy';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany(
    type => BookEntity,
    book => book.user,
  )
  books: BookEntity[];
}
