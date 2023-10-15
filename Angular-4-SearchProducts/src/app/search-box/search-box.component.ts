import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchPrompt : string = '';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  search(){
    this.searchEvent.emit(this.searchPrompt);
  }

}
