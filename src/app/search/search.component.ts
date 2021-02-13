import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  isSearching = false;
  results$: Observable<Person[]>;

  constructor(private resultsService: ResultsService) { }

  getResults(): void {
    this.results$ = this.resultsService.getResults();
  }

  search(event: boolean): void {
    if (event === true) {
      this.isSearching = true;
    }

    setTimeout(() => {
      this.getResults();
      this.isSearching = false;
    }, 2000);
  }
}
