import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBookComponent } from './cart-book.component';
import { CartService } from 'src/app/core/services/cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockBook } from 'src/app/core/mocks/book.mock';
import { mockCart } from 'src/app/core/mocks/cart.mock';
import { CommonModule } from '@angular/common';
import { mockCartItem } from 'src/app/core/mocks/cartItem.mock';
import { FormsModule } from '@angular/forms';

describe('CartBookComponent', () => {
  let component: CartBookComponent;
  let fixture: ComponentFixture<CartBookComponent>;
  let cart: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule, FormsModule],
      declarations: [CartBookComponent],
      providers: [CartService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBookComponent);
    component = fixture.componentInstance;
    cart = TestBed.inject(CartService);
    component.cartItem = mockCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete item form cart', () => {
    cart.clearCart();
    cart.cart.next(mockCart);
    cart.saveCart();
    component.deleteItem(mockBook.isbn);

    expect(cart.cart.value.items.length).toBe(0);
  });

  it('should update one item quantity to cart', () => {
    cart.clearCart();
    cart.cart.next(mockCart);
    cart.saveCart();
    component.cartItem.quantity = 60;
    component.updateQuantity();
    expect(cart.cart.value.items[0].quantity).toBe(60);
  });
});
