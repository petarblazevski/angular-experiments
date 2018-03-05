import { BaseContentType } from './base-content-type';

enum ContentType {
  TEXT = 'text',
  IMAGE = 'image'
}

export class ImageContentType extends BaseContentType {
  constructor(public type: ContentType = ContentType.IMAGE) {
    super();
  }
}
