import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[clickLog]'
})
export class ClickLogDirective {

    @HostListener('click')
    onClick() {
        console.log('clicked')
    }

}