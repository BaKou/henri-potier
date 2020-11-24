import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { mockBook } from '../mocks/book.mock';
import { mockCart } from '../mocks/cart.mock';
import { mockOffers } from '../mocks/discount.mock';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the books', () => {
    service.getAll().subscribe(bookData => {
      expect(bookData).toBeTruthy('No books data return');
      expect(bookData[0].isbn).toBe('c8fabf68-8374-48fe-a7ea-a00ccd07afff');
    });

    const req = httpController.expectOne(`${environment.api_url}/books`);
    expect(req.request.method).toEqual('GET');
    req.flush([mockBook, mockBook]);
  });

  it('should get discount for cart', () => {
    service
      .getOffers('c8fabf68-8374-48fe-a7ea-a00ccd07afff')
      .subscribe(discountData => {
        expect(discountData).toBeTruthy('No discount data return');
        expect(discountData.offers[0].type).toBe('percentage');
        expect(discountData.offers[1].type).toBe('minus');
        expect(discountData.offers[2].type).toBe('slice');
      });

    const req = httpController.expectOne(
      `${environment.api_url}/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff/commercialOffers`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockOffers);
  });

  afterEach(() => {
    httpController.verify();
  });
});
