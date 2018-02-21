import { Component, OnInit, Input } from '@angular/core';

interface Block {
  name: string;
  order: number;
  body: string;
  type: string;
}

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent implements OnInit {
  @Input() content: Block;
  edit = false;

  constructor() {}

  ngOnInit() {}

  toggleEditMode() {
    this.edit = !this.edit;
  }
}
