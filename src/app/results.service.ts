import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private resultsUrl = 'api/results';

  constructor(private http: HttpClient) { }

  getResults(): Observable<any[]> {
    return this.http.get<any[]>(this.resultsUrl)
      .pipe(
        tap(result => console.log(result))
      )
  }
}
