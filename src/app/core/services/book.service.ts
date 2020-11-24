import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { OffersResult } from '../results/offers.result';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<BookModel>> {
    return this.http.get<Array<BookModel>>(`${environment.api_url}/books`);
  }

  getBook(id: string): any {
    return this.http.get<Array<BookModel>>(`${environment.api_url}/books`).pipe(
      map(data => data.filter(book => book.isbn === id))
    );
  }

  getOffers(booksIds: string): Observable<OffersResult> {
    return this.http.get<OffersResult>(
      `${environment.api_url}/books/${booksIds}/commercialOffers`
    );
  }
}
