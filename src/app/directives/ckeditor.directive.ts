import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var ClassicEditor: any;

@Directive({
  selector: '[appCkeditor]'
})
export class CkeditorDirective implements OnInit {
  @Input() data: string;
  @Output() change = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    ClassicEditor.create(this.el.nativeElement).then(editor => {
      editor.setData(this.data || '');

      editor.model.document.on('change', () => {
        if ( editor.model.document.differ.getChanges().length > 0 ) {
          const data: string = editor.getData();
          this.change.emit(data);
        }
      });
    }, (err) => {
      console.log(err.message);
      console.log(err);
    });
  }

}
