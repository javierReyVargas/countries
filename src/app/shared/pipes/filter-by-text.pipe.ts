import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {

  transform(value: any, textFind: string): []{
    if (textFind !== undefined && textFind !== null && textFind !== '') {
      value = value.filter(country => country['name'].toLowerCase().includes(textFind.toLowerCase()));
    }
    return value;
  }

}
