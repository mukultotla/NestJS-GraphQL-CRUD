import { Resolver, Query } from "@nestjs/graphql";

@Resolver("Book")
export class BookResolver {
    
    @Query("books")
    getAllBooks() {
        return [
            {
                id: 1, 
                title: 'Cricket Rules',
                price: 999
            },
            {
                id: 2, 
                title: 'Fictional',
                price: 499
            },
            {
                id: 3, 
                title: 'Novels',
                price: 199
            },
        ]
    }
}