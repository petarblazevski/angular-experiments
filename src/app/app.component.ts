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

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('content', {
      copy: function(el, source) {
        return el.className === 'content-type';
      },
      copySortSource: false
    });

    dragulaService.drop.subscribe(value => {
      const [e, container, source, target] = value.slice(1);

      if (e.className.includes('content-type')) {
        const index = this.getElementIndex(target);
        // TODO: Currently there is a bug when you drop an item from the toolbox
        this.dragulaService.find('content').drake.cancel(true);

        if (!target) {
          data.push({
            name: 'Test',
            type: 'text',
            order: 10,
            body: 'Text'
          });
        } else {
          data.splice(index - 1, 0, {
            name: 'Test',
            type: 'text',
            order: 10,
            body: 'Text'
          });
        }
      }
    });
  }

  private getElementIndex(el: HTMLElement): number {
    return [].slice.call(el.parentElement.children).indexOf(el);
  }
}
