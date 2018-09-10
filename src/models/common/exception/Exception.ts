import {Resolvable} from "./Resolvable";
import {Throwable} from "./Throwable";

export class Exception implements Resolvable, Throwable {
  protected static readonly PREFIX: string = 'EXCEPTION.';
  static readonly UNKNOWN: string = Exception.PREFIX + 'UNKNOWN';

  protected _id: string;
  protected _reasons: Array<string>;
  protected _stacks: Array<Throwable>;

  constructor (throwable: Throwable = <Throwable>{}) {
    this
      .withId(throwable.id)
      .withReasons(throwable.reasons)
      .withStacks(throwable.stacks);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value || Exception.UNKNOWN;
  }

  get reasons(): Array<string> {
    return this._reasons;
  }

  set reasons(value: Array<string>) {
    this._reasons = value || [];
  }

  get stacks(): Array<Throwable> {
    return this._stacks;
  }

  set stacks(value: Array<Throwable>) {
    this._stacks = value || [];
  }

  withId (id: string): Exception {
    this.id = id;
    return this;
  }

  withReasons (reasons: Array<string>): Exception {
    this.reasons = reasons;
    return this;
  }

  addReason (reason: string): Exception {
    if (this.reasons.indexOf(reason) === -1) {
      this.reasons.push(reason);
    }
    return this;
  }

  addReasons (reasons: Array<string>): Exception {
    if (reasons) {
      reasons.forEach(reason => this.addReason(reason));
    }
    return this;
  }

  withStacks (stacks: Array<Throwable>): Exception {
    this.stacks = stacks;
    return this;
  }

  addStack (stack: Throwable): Exception {
    this.stacks.push(stack);
    return this;
  }

  addStacks (stacks: Array<Throwable>): Exception {
    if (stacks) {
      stacks.forEach(stack => this.addStack(stack));
    }
    return this;
  }

  log(): Exception {
    console.group(`${this.id}`);

    this.reasons
        .forEach(reason => console.warn(reason));

    this.stacks
        .forEach(exception => exception.log());

    console.groupEnd();

    return this;
  }

}
