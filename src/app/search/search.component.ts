import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
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
    this.results$ = this.resultsService.getResults().pipe(
      // simulate latency
      delay(2000),
      tap(() => {
        this.isSearching = !this.isSearching;
      })
    );
  }

  search(event: boolean): void {
    this.isSearching = event;
    this.getResults();
  }
}
