import { CartBookModel } from '../models/cart-book.model';
import { mockBook } from './book.mock';

export const mockCartItem = {
  isbn: mockBook.isbn,
  quantity: 1,
  book: mockBook
} as CartBookModel;
