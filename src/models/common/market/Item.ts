import {ItemQuality} from "./ItemQuality";

export class Item {

  private _code: string;
  private _name: string;
  private _description: string;
  private _image: string;
  private _quality: ItemQuality;

  constructor (item = <Item>{}) {
    this
      .withCode(item.code)
      .withName(item.name)
      .withDescription(item.description)
      .withImage(item.image)
      .withQuality(item.quality)
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  get quality(): ItemQuality {
    return this._quality;
  }

  set quality(value: ItemQuality) {
    this._quality = value || ItemQuality.Common;
  }

  withCode (code: string) {
    this.code = code;
    return this;
  }

  withName (name: string) {
    this.name = name;
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

  withQuality (quality: ItemQuality) {
    this.quality = quality;
    return this;
  }

}
