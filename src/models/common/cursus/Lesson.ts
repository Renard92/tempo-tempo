import {Step} from "../Step";
import {ILesson} from "./ILesson";

export class Lesson implements ILesson {

  private _id: string;
  private _title: string;
  private _level: number = 1;
  private _unlocked: boolean = false;
  private _step: Step;

  constructor (
    parameters: ILesson = <ILesson>{}
  ) {
    this._id = parameters.id;
    this._title = parameters.title;
    this._level = parameters.level || 1;
    this._unlocked = parameters.unlocked || false;
    this._step = parameters.step || new Step();
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
