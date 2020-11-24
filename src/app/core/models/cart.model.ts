import { BookModel } from 'src/app/core/models/book.model';

export interface CartModel {
  items: Array<{
    isbn: string;
    quantity: number;
    book: BookModel;
  }>;
  totalBook: number;
  discount: number;
  totalPrice: number;
}
