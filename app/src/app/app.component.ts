import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  value = 64;

  onIncrease() {
    this.value = this.value + 4;
  }

  onDecrease() {
    this.value = this.value - 4;
  }

  clickLogClicked() {
    
  }

onHello(message: string) {
  console.log(message)
}

}
