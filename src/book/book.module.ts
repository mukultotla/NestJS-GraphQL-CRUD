import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookEntity } from './entity/book.entity';
@Module({
  imports: [],
  providers: [BookService, BookEntity],
})
export class BookModule {}
