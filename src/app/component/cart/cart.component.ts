import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartModel = {
    items: [],
    totalBook: 0,
    discount: 0,
    totalPrice: 0
  };

  constructor(private cartService: CartService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Bibliothèque Henri Potier - Panier');
    this.cartService.cart.subscribe(cart => (this.cart = cart));
  }
}
