import {Step} from "../Step";
import {Unlockable} from "../Unlockable";
import {LessonType} from "./LessonType";

export class Lesson implements Unlockable {

  private _id: string;
  private _title: string;
  private _description: string;
  private _type: LessonType;
  private _imageSrc: string;
  private _level: number = 1;
  private _unlocked: boolean = false;
  private _step: Step;

  constructor (
    id?: string,
    title?: string,
    description?: string,
    imageSrc?: string,
    level: number = 1,
    unlocked: boolean = false,
    step: Step = new Step()
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageSrc = imageSrc;
    this.level = level;
    this.unlocked = unlocked;
    this.step = step;

    this.type = LessonType.Lesson;
  }

  set id(id: string) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  withId(id: string): Lesson {
    this.id = id;
    return this;
  }

  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  withTitle(title: string): Lesson {
    this.title = title;
    return this;
  }

  set description(description: string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  withDescription(description: string): Lesson {
    this.description = description;
    return this;
  }

  set imageSrc(imageSrc: string) {
    this._imageSrc = imageSrc;
  }

  get imageSrc() {
    return this._imageSrc;
  }

  withImageSrc(imageSrc: string): Lesson {
    this.imageSrc = imageSrc;
    return this;
  }

  set type(type: LessonType) {
    this._type = type;
  }

  get type(): LessonType {
    return this._type;
  }

  withType(type: LessonType): Lesson {
    this.type = type;
    return this;
  }

  set level(level: number) {
    this._level = level;
  }

  get level(): number {
    return this._level;
  }

  withLevel(level: number): Lesson {
    this.level = level;
    return this;
  }

  set step(step: Step) {
    this._step = step;
  }

  get step() {
    return this._step;
  }

  withStep(step: Step): Lesson {
    this.step = step;
    return this;
  }

  set unlocked(unlocked: boolean) {
    this._unlocked = unlocked;
  }

  get unlocked() {
    return this._unlocked;
  }

  withUnlocked(unlocked: boolean): Lesson {
    this.unlocked = unlocked;
    return this;
  }

}
