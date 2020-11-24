import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../services/book.service';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Array<BookModel>> {
  constructor(private bookService: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<BookModel>> {
    return this.bookService.getAll();
  }
}
