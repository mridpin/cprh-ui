import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchParams: string;
  @Output() newAlbumsEmitter = new EventEmitter<Album[]>();

  constructor(
    private searchService: SearchService,
  ) {
    this.searchParams = '';
  }

  ngOnInit(): void {
  }

  onSearchAlbum(): void {
    const albums = this.searchService.search();
    this.newAlbumsEmitter.emit(albums);
    console.log(albums);
  }

  onClear(): void {
    this.searchParams = '';
  }

}
