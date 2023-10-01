import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Output()
  hello = new EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.hello.emit('hello!')
  }
}
