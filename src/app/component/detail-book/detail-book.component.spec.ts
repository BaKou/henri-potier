import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBookComponent } from './detail-book.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { mockBook } from 'src/app/core/mocks/book.mock';

describe('DetailBookComponent', () => {
  let component: DetailBookComponent;
  let fixture: ComponentFixture<DetailBookComponent>;
  let cart: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailBookComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(name: string): string {
                  return 'c8fabf68-8374-48fe-a7ea-a00ccd07afff';
                }
              }
            }
          }
        },
        CartService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBookComponent);
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
