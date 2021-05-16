import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(): Album[] {
    const res: Album[] = [
      {
        id: '1',
        name: 'Name1',
        artist: 'Artist1',
        year: 2020,
      },
      {
        id: '1',
        name: 'Name1',
        artist: 'Artist1',
        year: 2020,
      },
    ];
    return res;
  }
}
