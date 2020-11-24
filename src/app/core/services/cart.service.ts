import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel } from '../models/book.model';
import { CartBookModel } from '../models/cart-book.model';
import { CartModel } from '../models/cart.model';
import { OffersResult } from '../results/offers.result';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new BehaviorSubject<CartModel>({
    items: [],
    totalBook: 0,
    discount: 0,
    totalPrice: 0
  });

  constructor(private bookService: BookService) {
    const localCart = this.getItem('cart');
    if (localCart !== null) {
      this.cart.next(JSON.parse(localCart));
    }
  }

  updateQuantity(cartItem: CartBookModel): void {
    const currentCart = this.cart.value;
    const alreadyIn = currentCart.items.find(
      cart => cart.isbn === cartItem.isbn
    );
    if (cartItem.quantity === 0) {
      this.deleteFromCart(cartItem.isbn);
    } else {
      if (alreadyIn) {
        alreadyIn.quantity = cartItem.quantity;
      }
    }

    this.saveCart();
  }

  addToCart(book: BookModel): void {
    const currentCart = this.cart.value;
    const alreadyIn = currentCart.items.find(cart => cart.isbn === book.isbn);

    if (alreadyIn) {
      alreadyIn.quantity = alreadyIn.quantity + 1;
    } else {
      currentCart.items.push({
        isbn: book.isbn,
        quantity: 1,
        book
      });
    }
    this.saveCart();
  }

  removeFromCart(book: BookModel): void {
    const currentCart = this.cart.value;
    const alreadyIn = currentCart.items.find(item => item.isbn === book.isbn);
    if (alreadyIn) {
      alreadyIn.quantity = alreadyIn.quantity - 1;
    }
    currentCart.items = currentCart.items.filter(item => item.quantity > 0);

    this.saveCart();
  }

  deleteFromCart(isbn: string): void {
    const currentCart = this.cart.value;
    currentCart.items.splice(
      currentCart.items.findIndex(cb => cb.isbn === isbn),
      1
    );

    this.saveCart();
  }

  countTotalPrice(): number {
    const currentCart = this.cart.value;
    let totalPrice = 0;

    currentCart.items.forEach(item => {
      totalPrice += item.book.price * item.quantity;
    });

    return totalPrice;
  }

  updateDiscount(): void {
    const currentCart = this.cart.value;
    let bookIds = '';

    currentCart.items.forEach(item => {
      bookIds += item.isbn + ',';
    });

    this.bookService
      .getOffers(bookIds)
      .subscribe(data => this.getBestOffer(data));
  }

  getBestOffer(discount: OffersResult): void {
    const currentCart = this.cart.value;
    const bestOffers: Array<number> = [];

    discount.offers.forEach(offer => {
      switch (offer.type) {
        case 'percentage':
          const percentageOffer = (offer.value / 100) * currentCart.totalPrice;
          if (percentageOffer > 0) {
            bestOffers.push(percentageOffer);
          }
          break;
        case 'minus':
          const minusOffer = offer.value;
          if (minusOffer > 0) {
            bestOffers.push(minusOffer);
          }
          break;
        case 'slice':
          const sliceOffer =
            Math.floor(currentCart.totalPrice / offer.sliceValue) * offer.value;
          if (sliceOffer > 0) {
            bestOffers.push(sliceOffer);
          }
          break;
      }

      currentCart.discount = Math.max(...bestOffers);
      this.cart.next(currentCart);
    });
  }

  clearCart(): void {
    this.cart.next({ items: [], totalBook: 0, discount: 0, totalPrice: 0 });
    window.localStorage.clear();
  }

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getItem(key: string): null | string {
    return window.localStorage.getItem(key);
  }

  updateTotalItem(): void {
    const currentCart = this.cart.value;
    let totalItems = 0;
    currentCart.items.forEach(element => {
      totalItems += element.quantity;
    });

    currentCart.totalBook = totalItems;

    this.cart.next(currentCart);
  }

  saveCart(): void {
    this.updateTotalItem();
    const currentCart = this.cart.value;

    if (currentCart.totalBook === 0) {
      currentCart.items = [];
      currentCart.discount = 0;
      currentCart.totalBook = 0;
      currentCart.totalPrice = 0;
      this.cart.next(currentCart);
    } else {
      currentCart.totalPrice = this.countTotalPrice();
      this.updateDiscount();
    }

    this.setItem('cart', JSON.stringify(currentCart));
  }
}
