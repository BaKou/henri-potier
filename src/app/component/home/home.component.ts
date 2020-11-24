import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../../core/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookList: Array<BookModel> = [];

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.titleService.setTitle('Bibliothèque Henri Potier - Accueil');
    this.route.data.subscribe(data => (this.bookList = data.books));
  }
}
