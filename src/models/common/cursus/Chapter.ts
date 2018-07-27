import {Lesson} from "./Lesson";
import {Unlockable} from "../Unlockable";

export class Chapter implements Unlockable {

  constructor (
    public id?: string,
    public title?: string,
    public unlocked: boolean = false,
    public lessons: Array<Lesson> = []
  ) {
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

}
