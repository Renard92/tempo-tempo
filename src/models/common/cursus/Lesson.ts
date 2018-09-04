import {Progress} from "../Progress";
import {Unlockable} from "../Unlockable";
import {LessonType} from "./LessonType";
import {Theory} from "./Theory";
import {Exercise} from "./Exercise";
import {Exam} from "./Exam";

export class Lesson implements Unlockable {

  private _id: string;
  private _title: string;
  private _description: string;
  private _type: LessonType;
  private _image: string;
  private _level: number = 1;
  private _progress: Progress = new Progress();

  constructor (lesson: Lesson = <Lesson>{}) {
    this
      .withId(lesson.id)
      .withTitle(lesson.title)
      .withDescription(lesson.description)
      .withImage(lesson.image)
      .withLevel(lesson.level)
      .withProgress(new Progress(lesson.progress))
      .withType(LessonType.Lesson);
  }

  public static from (lesson: Lesson = <Lesson>{}): Lesson {
    switch (lesson.type) {
      case LessonType.Theory:
        return new Theory(lesson);
      case LessonType.Exercise:
        return new Exercise(lesson);
      case LessonType.Exam:
        return new Exam(lesson);
      default:
        return new Lesson(lesson);
    }
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

  set image(imageSrc: string) {
    this._image = imageSrc;
  }

  get image() {
    return this._image;
  }

  withImage(image: string): Lesson {
    this.image = image;
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
