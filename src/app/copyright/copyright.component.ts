import { Component, OnInit } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  album: Album = {
    id: '123',
    name: 'sabaton',
    artist: 'sabaton',
    year: 2009
  };

  constructor() { }

  ngOnInit(): void {
  }

}
