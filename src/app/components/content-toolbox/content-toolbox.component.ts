import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-toolbox',
  templateUrl: './content-toolbox.component.html',
  styleUrls: ['./content-toolbox.component.scss']
})
export class ContentToolboxComponent implements OnInit {
  @Input() blocks: any;
  constructor() {}

  ngOnInit() {}
}
