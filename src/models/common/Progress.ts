import {Progressable} from "./Progressable";

export class Progress implements Progressable {

  private _total: number = 1;
  private _current: number = 0;

  constructor (progress: Progressable = <Progressable>{}) {
    this
      .withTotal(progress.total || 1)
      .withCurrent(progress.current || 0);
  }

  public static from (progress: Progress): Progress {
    return new Progress(progress);
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
