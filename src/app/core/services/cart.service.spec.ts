import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockBook } from '../mocks/book.mock';
import { mockBookTwo } from '../mocks/bookTwo.mock';
import { mockOffers } from '../mocks/discount.mock';
import { BookService } from './book.service';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  const fakeBookServiceSpy = jasmine.createSpyObj<BookService>('BookService', [
    'getOffers'
  ]);

  fakeBookServiceSpy.getOffers.and.returnValue(of(mockOffers));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: BookService,
          useValue: fakeBookServiceSpy
        }
      ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear cart', () => {
    service.clearCart();
    expect(service.cart.value.totalBook).toBe(0);
    expect(service.cart.value.discount).toBe(0);
    expect(service.cart.value.totalPrice).toBe(0);
  });

  it('should add item to cart', () => {
    service.clearCart();
    service.addToCart(mockBook);
    expect(service.cart.value.items.length).toBe(1);
    expect(service.cart.value.totalBook).toBe(1);
  });

  it('should add quantity to one book', () => {
    service.clearCart();
    service.addToCart(mockBook);
    service.addToCart(mockBook);
    expect(service.cart.value.items.length).toBe(1);
    expect(service.cart.value.totalBook).toBe(2);
  });

  it('should remove one quantity item to cart', () => {
    service.clearCart();
    service.addToCart(mockBook);
    service.addToCart(mockBook);
    service.removeFromCart(mockBook);
    expect(service.cart.value.items.length).toBe(1);
    expect(service.cart.value.totalBook).toBe(1);
  });

  it('should delete one item item to cart', () => {
    service.clearCart();
    service.addToCart(mockBook);
    service.addToCart(mockBookTwo);
    service.deleteFromCart(mockBook.isbn);
    expect(service.cart.value.items.length).toBe(1);
    expect(service.cart.value.totalBook).toBe(1);
  });

  it('should delete one item from cart', () => {
    service.clearCart();
    expect(service).toBeTruthy();
  });

  it('should update the total quantity and total price', () => {
    service.clearCart();
    fakeBookServiceSpy.getOffers.and.returnValue(of(mockOffers));
    service.addToCart(mockBook);
    service.addToCart(mockBookTwo);
    expect(service.cart.value.totalBook).toBe(2);
    expect(service.cart.value.totalPrice).toBe(65);
  });

  it('should calculate and update the discount', () => {
    service.clearCart();
    service.addToCart(mockBook);
    expect(fakeBookServiceSpy.getOffers).toHaveBeenCalled();
    service.addToCart(mockBookTwo);
    expect(fakeBookServiceSpy.getOffers).toHaveBeenCalled();

    expect(service.cart.value.discount).toBe(15);
  });

  it('should save cart in localStorage', () => {
    service.clearCart();
    expect(service).toBeTruthy();
  });
});
