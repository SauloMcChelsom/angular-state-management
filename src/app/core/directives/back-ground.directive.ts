import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorYellow]'
})
export class BackGroundDirective {
    @Input() colorYellow = '';
    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(this.colorYellow || 'blue');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}