import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() albums: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
