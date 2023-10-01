import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#cde0ff';
    this.el.nativeElement.fontSize = 20;
    console.log('directive')
   }

}
