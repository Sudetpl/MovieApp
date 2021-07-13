import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const movies = [
      {id: 1, name: "movie 1",description:"önerilen film",imageUrl:"image1.png"},
      {id: 2, name: "movie 2",description:"önerilen film",imageUrl:"image2.png"},
      {id: 3, name: "movie 3",description:"önerilen film",imageUrl:"image3.png"},
      {id: 4, name: "movie 4",description:"önerilen film",imageUrl:"image4.png"},
      {id: 5, name: "movie 5",description:"önerilen film",imageUrl:"image5.png"},
      {id: 6, name: "movie 6",description:"önerilen film",imageUrl:"image6.png"},
      {id: 7, name: "movie 7",description:"önerilen film",imageUrl:"image7.png"},
  ];
  return {movies};
  }
  constructor() { }
}
