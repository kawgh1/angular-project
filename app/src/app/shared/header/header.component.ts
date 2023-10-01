import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  size = 64;

  readonly buttonList = ['Home', 'About', 'Profile']

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   this.size = changes['size'].currentValue;
  // }

}
