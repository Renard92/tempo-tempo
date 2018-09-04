export class Slider {

  private _title: string;
  private _description: string;
  private _image: string;

  constructor (slider: Slider = <Slider>{}) {
    this
      .withTitle(slider.title)
      .withDescription(slider.description)
      .withImage(slider.image);
  }

  public static from (slider: Slider): Slider {
    return new Slider(slider);
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
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
