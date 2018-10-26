import {Lesson} from "./Lesson";
import {Unlockable} from "../Unlockable";
import {Progress} from "../Progress";

export class Chapter implements Unlockable {

  private _id: string;
  private _title: string;
  private _unlocked: boolean = false;
  private _lessons: Array<Lesson> = [];
  private _progress: Progress;

  constructor (chapter: Chapter = <Chapter>{}) {
    this
      .withId(chapter.id)
      .withTitle(chapter.title)
      .withUnlocked(chapter.unlocked)
      .withProgress(chapter.progress)
      .withLessons((chapter.lessons || []).map((data) => new Lesson(data)));
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get unlocked(): boolean {
    return this._unlocked;
  }

  set unlocked(value: boolean) {
    this._unlocked = value;
  }

  get lessons(): Array<Lesson> {
    return this._lessons;
  }

  set lessons(value: Array<Lesson>) {
    this._lessons = value;
  }

  get progress(): Progress {
    return this._progress;
  }

  set progress(value: Progress) {
    this._progress = value;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
    return this;
  }

  withLessons(lessons: Array<Lesson>) {
    this.lessons = lessons;
    return this;
  }

  withProgress(progress: Progress) {
    this.progress = progress;
    return this;
  }

}
