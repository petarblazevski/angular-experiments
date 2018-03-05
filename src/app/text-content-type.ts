import { BaseContentType } from './base-content-type';

enum ContentType {
  TEXT = 'text',
  IMAGE = 'image'
}

export class TextContentType extends BaseContentType {
  constructor(public type: ContentType = ContentType.TEXT) {
    super();
  }
}
