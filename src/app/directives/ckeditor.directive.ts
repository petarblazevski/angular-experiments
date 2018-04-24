import {Directive, ElementRef} from '@angular/core';

declare var ClassicEditor: any;

@Directive({
  selector: '[appCkeditor]'
})
export class CkeditorDirective {

  constructor(private el: ElementRef) {
    console.log(this.el);
    ClassicEditor.create(el.nativeElement);
  }

}
