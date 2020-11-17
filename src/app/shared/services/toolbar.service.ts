import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  @Output() changeTextSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public searchText(textToSearch) {
    this.changeTextSearch.emit(textToSearch);
  }
}
