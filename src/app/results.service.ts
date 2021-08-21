import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { Person } from "./models/person";

@Injectable({
  providedIn: "root",
})
export class ResultsService {
  private resultsUrl = "api/results";

  constructor(private http: HttpClient) {}

  getResults(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.resultsUrl)
      .pipe(tap((result) => console.log(result)));
  }
}
