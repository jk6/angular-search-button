import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnChanges {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Input() isSearching: boolean;

  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.buttonText = this.isSearching ? 'Searching...' : 'Search';
    console.log(this.isSearching);
  }

  ngOnChanges() {
    this.buttonText = this.isSearching ? 'Searching...' : 'Search';
  }

  doSearch(): void {    
    this.search.emit(!this.isSearching);
  }
}
