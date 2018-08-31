import {Progress} from "../Progress";
import {Unlockable} from "../Unlockable";
import {LessonType} from "./LessonType";

export class Lesson implements Unlockable {

  private _id: string;
  private _title: string;
  private _description: string;
  private _type: LessonType;
  private _imageSrc: string;
  private _level: number = 1;
  private _progress: Progress;

  constructor (
    id?: string,
    title?: string,
    description?: string,
    imageSrc?: string,
    level: number = 1,
    progress: Progress = new Progress()
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageSrc = imageSrc;
    this.level = level;
    this.progress = progress;

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

  set progress(progress: Progress) {
    this._progress = progress;
  }

  get progress() {
    return this._progress;
  }

  withProgress(progress: Progress): Lesson {
    this.progress = progress;
    return this;
  }

  isUnlocked () {
    return this.progress.isDone();
  }

}
