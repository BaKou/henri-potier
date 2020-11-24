import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CartBookComponent } from '../cart-book/cart-book.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent, CartListComponent, CartBookComponent],
      imports: [HttpClientTestingModule, FormsModule, MatListModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
