import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const results: Array<Person> = [
      {
        id: 1,
        name: 'Batman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg',
        info: 'Fights crime in Gotham'
      },
      {
        id: 2,
        name: 'Ed Grimley',
        imgUrl: 'https://pbs.twimg.com/profile_images/866362899249242112/zLj7TY5O_400x400.jpg',
        info: 'Likes to watch Pat Sajak, I must say'
      }
    ];

    return {
      results
    };
  }
}
