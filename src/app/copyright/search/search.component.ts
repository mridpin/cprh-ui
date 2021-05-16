import { Component, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  albums: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeAlbums(albumResults: Album[]): void {
    this.albums = albumResults;
  }
}
