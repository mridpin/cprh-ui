import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { SearchService } from 'src/app/services/search.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchResultsComponent implements OnInit {

  @Input() albums: Album[] = [];

  album!: Album;
  displayedColumns: string[] = ['album', 'artist', 'year'];
  expandedAlbum!: Album | null;

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  onClickAlbum(): void {
  // onClickAlbum(album: Album): void {
    // this.searchService.album(album)
    //   .subscribe(
    //     (newAlbum: Album) => {
    //       this.album = newAlbum;
    //     },
    //     (error: any) => {
    //       console.log(error)
    //     }
    //   );
    console.log('opened')
  }

}
