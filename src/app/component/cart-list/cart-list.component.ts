import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../../core/models/cart.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() cart: CartModel = {
    items: [],
    totalBook: 0,
    discount: 0,
    totalPrice: 0
  };

  constructor() {}

  ngOnInit(): void {}
}
