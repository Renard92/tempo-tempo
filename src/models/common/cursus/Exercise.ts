import {Lesson} from "./Lesson";
import {LessonType} from "./LessonType";

export class Exercise extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-exercise-icon.svg';

  constructor (lesson: Lesson = <Lesson>{}) {
    super(lesson);
    this.type = LessonType.Exercise;
    this.image = this.image || Exercise.DEFAULT_IMAGE_SRC;
  }

}
