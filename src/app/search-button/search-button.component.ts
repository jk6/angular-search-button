import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchButtonComponent implements OnChanges {
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Input() isSearching: boolean;

  buttonText: string;

  constructor() { }

  ngOnInit () {
    this.buttonText = this.isSearching ? 'Searching...' : 'Search';
    console.log(this.isSearching);
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    this.buttonText = this.isSearching ? 'Searching...' : 'Search';
  }

  doSearch(): void {
    this.search.emit(!this.isSearching);
  }
}
