import {Lesson} from "./Lesson";
import {LessonType} from "./LessonType";

export class Theory extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-theory-icon.svg';

  constructor (lesson: Lesson = <Lesson>{}) {
    super(lesson);
    this.type = LessonType.Theory;
    this.image = this.image || Theory.DEFAULT_IMAGE_SRC;
  }

}
