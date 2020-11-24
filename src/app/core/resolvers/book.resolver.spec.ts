import { TestBed, inject } from '@angular/core/testing';
import { BookService } from '../services/book.service';
import { BookResolver } from './book.resolver';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookResolver', () => {
  let resolver: BookResolver;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    resolver = TestBed.inject(BookResolver);
    route = new ActivatedRouteSnapshot();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
