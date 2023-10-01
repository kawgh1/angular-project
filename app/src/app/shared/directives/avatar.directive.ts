import { Directive, ElementRef, Input, OnChanges, OnInit } from "@angular/core";

@Directive({
    selector: '[appAvatar]'
})
export class AvatarDirective implements OnChanges{

    @Input() size = 44;

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
        const padding = '15px';
        const borderRadius = '50px'
        this.el.nativeElement.style.height = this.size + 'px';
        this.el.nativeElement.style.width = this.size + 'px';
        this.el.nativeElement.style.padding = padding;
        this.el.nativeElement.style.borderRadius = borderRadius;
    }

    
}