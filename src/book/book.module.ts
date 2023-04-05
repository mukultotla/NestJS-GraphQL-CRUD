import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';


@Module({
  imports: [],
  controllers: [],
  providers: [BookResolver],
})
export class BookModule {}
