export class Slider {

  constructor(
    public title?: string,
    public description?: string,
    public image?: string
  ) {
  }

  withTitle (title: string) {
    this.title = title;
    return this;
  }

  withDescription (description: string) {
    this.description = description;
    return this;
  }

  withImage (image: string) {
    this.image = image;
    return this;
  }

}
