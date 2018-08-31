import {Resolvable} from "./Resolvable";

export class Exception implements Resolvable {
  static PREFIX: string = 'EXCEPTION.';

  constructor (
    public id: string = Exception.PREFIX + 'UNKNOWN',
    public reason: any = null,
    public message: any = null
  ) {
  }

  withId (id: string): Exception {
    this.id = id;
    return this;
  }

  withReason (reason: any): Exception {
    this.reason = reason;
    return this;
  }

  withMessage (message: any): Exception {
    this.message = message;
    return this;
  }

}
