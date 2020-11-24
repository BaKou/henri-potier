import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { BookModel } from 'src/app/core/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/services/book.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  book: BookModel = {
    isbn: '',
    title: '',
    price: 0,
    cover: '',
    synopsis: []
  };

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private titleService: Title,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(id).subscribe((b: Array<BookModel>) => {
        this.book = b[0];
        this.titleService.setTitle(
          `Bibliothèque Henri Potier - ${this.book.title} `
        );
      });
    }
  }

  addtoCart(book: BookModel): void {
    this.cartService.addToCart(book);
  }
}
