import { Pipe, PipeTransform } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Array<BookModel>, search: string): Array<BookModel> {
    if (!search) {
      return value;
    }

    if (!value) {
      return [];
    }

    search = search.toLowerCase();

    return value.filter(v => v.title.toLowerCase().includes(search));
  }
}
