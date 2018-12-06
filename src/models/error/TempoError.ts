import {ErrorName} from "./ErrorName";
export class TempoError implements Error {

  protected _name: string;
  protected _message: string;
  protected _stacks: Array<TempoError>;

  constructor (message?: string) {
    this.name = ErrorName.UNKNOWN_ERROR.toString();
    this.message = message;
    this.stacks = [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  withName(value: string) {
    this.name = value;
    return this;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  withMessage(value: string): TempoError {
    this.message = value;
    return this;
  }

  get stacks(): Array<TempoError> {
    return this._stacks;
  }

  set stacks(value: Array<TempoError>) {
    this._stacks = value || [];
  }

  withStacks (stacks: Array<TempoError>): TempoError {
    this.stacks = stacks;
    return this;
  }

  addStack (stack: TempoError): TempoError {
    this.stacks.push(stack);
    return this;
  }

  addStacks (stacks: Array<TempoError>): TempoError {
    if (stacks) {
      this.stacks.concat(stacks);
    }
    return this;
  }

  toString(): string {
    return this.name;
  }

  log(): TempoError {
    console.group(`${this.name}`);

    console.warn(this.message);

    this.stacks
      .forEach(stack => stack.log());

    console.groupEnd();

    return this;
  }

}
