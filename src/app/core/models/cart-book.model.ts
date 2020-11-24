import { BookModel } from './book.model';

export interface CartBookModel {
  isbn: string;
  quantity: number;
  book: BookModel;
}
