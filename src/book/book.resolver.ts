import { Resolver, Query } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "src/graphql";
@Resolver((of) => Book)
export class BookResolver {

    @Query((returns) => [Book], { name: "books" })
    getAllBooks() {
        let arr: BookModel[] = [
            { id: 1, title: 'Cricket Rules', price: 999 },
            { id: 2, title: 'Fictional', price: 499 },
            { id: 3, title: 'Novels', price: 199 }, 
        ]

        return arr;
    }
}