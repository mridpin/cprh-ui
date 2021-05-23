import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  albums: Album[] = [];

  @Output() newAlbumEmitter = new EventEmitter<Album>();

  constructor() { }

  ngOnInit(): void {
  }

  changeAlbums(albumResults: Album[]): void {
    this.albums = albumResults;
  }

  changeAlbum(album: Album): void {
    this.newAlbumEmitter.emit(album);
  }
}
