import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() albums: Album[] = [];

  @Output() newAlbumEmitter = new EventEmitter<Album>();

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  onClickAlbum(album: Album): void {
    this.searchService.album(album)
      .subscribe(
        (newAlbum: Album) => {
          this.newAlbumEmitter.emit(newAlbum);
        },
        (error: any) => {
          console.log(error)
        }
      );
  }

}
