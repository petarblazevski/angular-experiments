import {Component, OnDestroy, OnInit} from '@angular/core';
import { DragulaService, dragula } from 'ng2-dragula';

import { data } from '../../content_data';
import { TextContentType } from '../../text-content-type';
import { BaseContentType } from '../../base-content-type';
import { ImageContentType } from '../../image-content-type';

enum ContentType {
  TEXT = 'text',
  IMAGE = 'image'
}

interface ContentBlock {
  name: string;
  type: string;
  order: number;
  body: string;
}

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.scss']
})
export class DragNdropComponent implements OnInit, OnDestroy {
  blocks: ContentBlock[] = data;
  elIndex = null;
  isDropped = false;
  droppedContentType: ContentType = null;

  constructor(private dragulaService: DragulaService) {}

  ngOnInit() {
    this.dragulaService.setOptions('content', {
      copy: function(el, source) {
        return el.className === 'content-type';
      },
      copySortSource: false
    });

    this.dragulaService.drop.subscribe(value => {
      const [e, container, source, target] = value.slice(1);

      if (e.className.includes('content-type') && container) {
        this.elIndex = this.getElementIndex(target);
        this.isDropped = true;
        this.droppedContentType = e.dataset['contentType'];
      }
    });

    this.dragulaService.dropModel.subscribe(value => {
      if (this.isDropped) {
        let contentType: BaseContentType;

        switch (this.droppedContentType) {
          case ContentType.TEXT: {
            contentType = new TextContentType();
            break;
          }

          case ContentType.IMAGE: {
            contentType = new ImageContentType();
            break;
          }
        }

        try {
          this.blocks[this.elIndex - 1] = <ContentBlock>contentType.toObject();
        } catch (e) {
          console.error(e);
        }

        this.isDropped = false;
      }
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('content');
  }

  private getElementIndex(el: HTMLElement): number {
    return [].slice.call(el.parentElement.children).indexOf(el);
  }

}
