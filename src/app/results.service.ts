import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from './models/person';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private resultsUrl = 'api/results';

  constructor(private http: HttpClient) { }

  getResults(): Observable<Person[]> {
    return this.http.get<Person[]>(this.resultsUrl)
      .pipe(
        untilDestroyed(this),
        tap(result => console.log(result))
      );
  }
}
