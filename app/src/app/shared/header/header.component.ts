import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  size = 64;

  readonly buttonList = ['elements', 'collections', 'views', 'mods']

  constructor() { }

  ngOnInit() {
  }

}
