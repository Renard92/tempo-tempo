import {Progressable} from "./Progressable";

export class Progress implements Progressable {

  private _total: number = 1;
  private _current: number = 0;
  private _percentage: number = 0;

  constructor (progress: Progressable = <Progressable>{}) {
    this
      .withTotal(progress.total || 1)
      .withCurrent(progress.current || 0);
  }

  set total(total: number) {
    this._total = total;
    this.updatePercentage();
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
    this.updatePercentage();
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

  reset() {
    this.current = 0;
    return this;
  }

  isCompleted() {
    return this.current >= this.total;
  }

  private updatePercentage(): number {
    return this._percentage = Number.parseInt(((this.current / this.total) * 100).toFixed(0));
  }

  get percentage(): number {
    return this._percentage;
  }

}
