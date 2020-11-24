import { mockBook } from './book.mock';
import { CartModel } from '../models/cart.model';

export const mockCart = {
  items: [
    {
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      quantity: 1,
      book: mockBook
    }
  ],
  totalBook: 1,
  discount: 15,
  totalPrice: 35
} as CartModel;
