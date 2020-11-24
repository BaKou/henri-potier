import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from './book.component';
import { CartService } from 'src/app/core/services/cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockBook } from 'src/app/core/mocks/book.mock';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let cart: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule],
      declarations: [BookComponent],
      providers: [CartService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    cart = TestBed.inject(CartService);
    component.book = mockBook;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add book to cart', () => {
    cart.clearCart();
    component.addtoCart(mockBook);
    expect(cart.cart.value.items.length).toBe(1);
  });
});
