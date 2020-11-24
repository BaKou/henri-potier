import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../core/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() bookList: Array<BookModel> = [];
  searchText = '';

  constructor() {}

  ngOnInit(): void {}
}
