import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const results = [
      {
        id: 1,
        name: "Batman",
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg'
      },
      {
        id: 2,
        name: "Ed Grimley",
        imgUrl: 'https://pbs.twimg.com/profile_images/866362899249242112/zLj7TY5O_400x400.jpg'
      }
    ];

    return { results };
  }

  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(results: any[]): number {
    return results.length > 0 ? Math.max(...results.map(hero => hero.id)) + 1 : 0;
  }
}
