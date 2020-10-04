import { Field } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Author from './author.entity';
import BookGenre from './book-genre.entity';

export default class Book {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ name: 'author_id' })
  authorId: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Author)
  author: Author;

  @ManyToOne(
    () => Author,
    author => author.bookConnection,
    { primary: true },
  )
  @JoinColumn({ name: 'author_id' })
  authorConnection: Promise<Author>;

  @OneToMany(
    () => BookGenre,
    bookGenre => bookGenre.genre,
  )
  genreConnection: Promise<BookGenre[]>;
}
