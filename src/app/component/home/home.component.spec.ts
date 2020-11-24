import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockBook } from 'src/app/core/mocks/book.mock';
import { mockBookTwo } from 'src/app/core/mocks/bookTwo.mock';
import { BookListComponent } from '../book-list/book-list.component';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, BookListComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of([mockBook, mockBookTwo])
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
