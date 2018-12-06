import {LogMethod} from "../../decorators/method/LogMethod";

export class Skeleton {

  public static DEFAULT_BONES_NUMBER: number = 5;

  private _parts: { [parts: string]: Array<any> } = {};

  constructor (skeleton: Skeleton = <Skeleton>{}) {
    this.parts = skeleton.parts;
  }

  get parts(): { [part: string]: Array<any> } {
    return this._parts;
  }

  set parts(value: { [part: string]: Array<any> }) {
    this._parts = value || {};
  }

  withPart (part: string, bones: number = Skeleton.DEFAULT_BONES_NUMBER): Skeleton {
    this.addPart(part, bones);
    return this;
  }

  @LogMethod
  addPart (part: string, bones: number = Skeleton.DEFAULT_BONES_NUMBER) {
    this.parts[part] = new Array(bones);
  }

}
