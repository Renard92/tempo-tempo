import {Lesson} from "./Lesson";
import {LessonType} from "./LessonType";

export class Theory extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-theory-icon.svg';

  constructor () {
    super();
    this.type = LessonType.Theory;
    this.imageSrc = this.imageSrc || Theory.DEFAULT_IMAGE_SRC;
  }

}
