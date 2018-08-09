import {LessonType} from "./LessonType";
import {Lesson} from "./Lesson";

export class Exam extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-exam-icon.svg';

  constructor () {
    super();
    this.type = LessonType.Exam;
    this.imageSrc = this.imageSrc || Exam.DEFAULT_IMAGE_SRC;
  }

}
