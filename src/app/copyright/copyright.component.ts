import { Component, OnInit } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  album!: Album;

  constructor() { }

  ngOnInit(): void {
  }

  changeAlbum(album: Album): void {
    this.album = album;
  }

}
