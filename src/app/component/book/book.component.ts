import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel = {
    isbn: '',
    title: '',
    price: 0,
    cover: '',
    synopsis: []
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addtoCart(book: BookModel): void {
    this.cartService.addToCart(book);
  }
}
