import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { BookListComponent } from './book-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { FormsModule } from '@angular/forms';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGridListModule, CommonModule, FormsModule],
      declarations: [BookListComponent, SearchPipe, BookComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
