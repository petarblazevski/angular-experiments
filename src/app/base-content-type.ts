export class BaseContentType {
  constructor(
    public name: string = 'Sample Title',
    public body: string = 'Test Body',
    public order: number = 0
  ) {}

  toObject() {
    let properties = {};

    Object.getOwnPropertyNames(this).forEach(property => {
      Object.assign(properties, { [property]: this[property] });
    });

    return properties;
  }
}
