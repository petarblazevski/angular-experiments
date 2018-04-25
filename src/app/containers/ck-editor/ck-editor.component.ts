import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {
  data = '<h1>Hello World</h1>';

  constructor() { }

  ngOnInit() {
  }

  onChange(data) {
    console.log('change:::', data);
  }

}
