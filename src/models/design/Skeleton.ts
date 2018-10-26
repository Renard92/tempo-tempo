import {LogMethod} from "../../decorators/method/LogMethod";

export class Skeleton {

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

  @LogMethod
  withPart (part: string, bones: number = 5): Skeleton {
    this.addPart(part, bones);
    return this;
  }

  addPart (part: string, bones: number = 5) {
    this.parts[part] = new Array(bones);
  }

}
