import { SearchPipe } from './search.pipe';
import { mockBook } from '../mocks/book.mock';
import { mockBookTwo } from '../mocks/bookTwo.mock';
import { async, TestBed } from '@angular/core/testing';

describe('SearchPipe', () => {
  let pipe: SearchPipe;
  const bookList = [mockBook, mockBookTwo];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SearchPipe]
    }).compileComponents();

    pipe = TestBed.get(SearchPipe);
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter book', () => {
    expect(pipe.transform(bookList, 'sor')).toEqual([mockBook]);
  });

  it('should return all book', () => {
    expect(pipe.transform(bookList, '')).toEqual(bookList);
  });

  it('should return empty array', () => {
    expect(pipe.transform([], 'potier')).toEqual([]);
  });
});
