import {Lesson} from "./Lesson";
import {IChapter} from "./IChapter";

export class Chapter implements IChapter {

  public id: string;
  public title: string;
  public unlocked: boolean;
  public lessons: Array<Lesson>;

  constructor (
    parameters: IChapter = <IChapter>{}
  ) {
    this.id = parameters.id;
    this.title = parameters.title;
    this.unlocked = parameters.unlocked || false;
    this.lessons = parameters.lessons || [];
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
