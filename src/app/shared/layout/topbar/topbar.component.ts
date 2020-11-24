import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  quantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe(cart => (this.quantity = cart.totalBook));
  }
}
