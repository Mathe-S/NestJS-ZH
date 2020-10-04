import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import BookGenre from './book-genre.entity';

export default class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'genre_name' })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(
    () => BookGenre,
    bookGenre => bookGenre.book,
  )
  bookConnection: Promise<BookGenre[]>;
}
