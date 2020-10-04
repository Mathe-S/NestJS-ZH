/* eslint-disable @typescript-eslint/no-unused-vars */
import { GenreEntity } from 'src/genre/genre.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(
    type => UserEntity,
    user => user.books,
  )
  user: UserEntity;

  @ManyToMany(type => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
