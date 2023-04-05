import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  imports: [],
  providers: [BookService, BookResolver],
})
export class BookModule {}
