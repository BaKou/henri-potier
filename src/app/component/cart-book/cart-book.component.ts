import { Component, OnInit, Input } from '@angular/core';
import { CartBookModel } from 'src/app/core/models/cart-book.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-book',
  templateUrl: './cart-book.component.html',
  styleUrls: ['./cart-book.component.scss']
})
export class CartBookComponent implements OnInit {
  @Input() cartItem: CartBookModel = {
    isbn: '',
    quantity: 0,
    book: {
      isbn: '',
      title: '',
      price: 0,
      cover: '',
      synopsis: []
    }
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  deleteItem(isbn: string): void {
    this.cartService.deleteFromCart(isbn);
  }

  updateQuantity(): void {
    this.cartService.updateQuantity(this.cartItem);
  }
}
