import { Component } from '@angular/core';

import { data } from './content_data';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  blocks = data;

  constructor(private dragService: DragulaService) {
    dragService.drop.subscribe(value => {
      console.log(`drop:`, value);
      console.log(value.slice(1));
    });
  }
}
