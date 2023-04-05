import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
    public bookData: BookEntity[] = [];
    
    addBook(book: BookEntity): string {
        this.bookData.push(book);
        return 'Book added successfully';
    }

    updateBook(id: number, updateBook: BookEntity): string {
        for(let index = 0; index < this.bookData.length; index++){
            if(this.bookData[index].id === id){
                this.bookData[index] = updateBook;
            }
        }
        return 'Book updated successfully';
    }

    deleteBook(id: number): string {
        this.bookData = this.bookData.filter((book) => book.id !== id);
        return 'Book has been deleted';
    }

    findBookById(id: number): BookEntity {
        for(let index = 0; index < this.bookData.length; index++){
            if(this.bookData[index].id === id){
                return this.bookData[index];
            }
        }
    }

    findAllBooks(): BookEntity[] {
        return this.bookData;
    }
}