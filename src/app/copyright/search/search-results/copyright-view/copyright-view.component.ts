import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-copyright-view',
  templateUrl: './copyright-view.component.html',
  styleUrls: ['./copyright-view.component.css']
})
export class CopyrightViewComponent implements OnInit {

  @Input() album: Album | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
