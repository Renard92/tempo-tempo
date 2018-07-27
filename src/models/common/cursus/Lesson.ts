import {Step} from "../Step";
import {Unlockable} from "../Unlockable";

export class Lesson implements Unlockable {

  private _id: string;
  private _title: string;
  private _level: number = 1;
  private _unlocked: boolean = false;
  private _step: Step;

  constructor (
    id?: string,
    title?: string,
    level: number = 1,
    unlocked: boolean = false,
    step: Step = new Step()
  ) {
    this.id = id;
    this.title = title;
    this.level = level;
    this.unlocked = unlocked;
    this.step = step;
  }

  set id(id: string) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  set level(level: number) {
    this._level = level;
  }

  get level() {
    return this._level;
  }

  withLevel(level: number) {
    this.level = level;
    return this;
  }

  set step(step: Step) {
    this._step = step;
  }

  get step() {
    return this._step;
  }

  withStep(step: Step) {
    this.step = step;
    return this;
  }

  set unlocked(unlocked: boolean) {
    this._unlocked = unlocked;
  }

  get unlocked() {
    return this._unlocked;
  }

  withUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
    return this;
  }

}
