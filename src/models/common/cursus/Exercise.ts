import {Lesson} from "./Lesson";
import {LessonType} from "./LessonType";

export class Exercise extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-exercise-icon.svg';

  constructor () {
    super();
    this.type = LessonType.Exercise;
    this.imageSrc = this.imageSrc || Exercise.DEFAULT_IMAGE_SRC;
  }

}
