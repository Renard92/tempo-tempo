import {IStep} from "./IStep";

export class Step implements IStep {

  private _total: number;
  private _current: number;

  constructor (
    parameters: IStep = <IStep>{}
  ) {
    this._total = parameters.total || 1;
    this._current = parameters.current || 0;
  }

  set total(total: number) {
    this._total = total;
  }

  get total() {
    return this._total;
  }

  withTotal(total: number) {
    this.total = total;
    return this;
  }

  set current(current: number) {
    this._current = current;
  }

  get current() {
    return this._current;
  }

  withCurrent(current: number) {
    this.current = current;
    return this;
  }

  up() {
    if (this.current < this.total) {
      this.current++;
    }
    return this;
  }

  down() {
    if (this.current > 0) {
      this.current--;
    }
    return this;
  }

  isDone() {
    return this.current >= (this.total);
  }

}
