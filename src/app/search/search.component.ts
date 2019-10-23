import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isSearching: boolean;
  results: any[] = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.isSearching = false;
  }

  getResults(): void {
    this.resultsService.getResults()
      .subscribe(results => this.results = results);
  }

  search(event: any): void {
    this.isSearching = event;

    setTimeout(() => {
      this.getResults();
      this.isSearching = false;    
    }, 2000);

    console.log(this.results);
  }
}
