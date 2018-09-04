import {Lesson} from "./Lesson";
import {Unlockable} from "../Unlockable";

export class Chapter implements Unlockable {

  private _id: string;
  private _title: string;
  private _unlocked: boolean = false;
  private _lessons: Array<Lesson> = [];

  constructor (chapter: Chapter = <Chapter>{}) {
    this
      .withId(chapter.id)
      .withTitle(chapter.title)
      .withUnlocked(chapter.unlocked)
      .withLessons((chapter.lessons || []).map(Lesson.from));
  }

  public static from (chapter: Chapter) {
    return new Chapter(chapter);
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

  isUnlocked () {
    return this.unlocked;
  }

}
