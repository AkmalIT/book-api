import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { Book } from './book.model';

@Injectable()
export class BookService {
  private books: Book[] = [];
  private idCounter = 1;

  create(createBookInput: CreateBookInput): Book {
    const newBook = {
      id: this.idCounter++,
      ...createBookInput,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find((book) => book.id === id);
  }

  remove(id: number): Book {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex > -1) {
      const [book] = this.books.splice(bookIndex, 1);
      return book;
    }
    return null;
  }
}
