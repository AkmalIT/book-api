import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './book.model';
import { CreateBookInput } from './dto/create-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput): Book {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  findAll(): Book[] {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number): Book {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => Int }) id: number): Book {
    return this.bookService.remove(id);
  }
}
