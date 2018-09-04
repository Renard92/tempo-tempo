import {LessonType} from "./LessonType";
import {Lesson} from "./Lesson";

export class Exam extends Lesson {

  static DEFAULT_IMAGE_SRC = 'assets/icon/lesson/default-exam-icon.svg';

  constructor (lesson: Lesson = <Lesson>{}) {
    super(lesson);
    this.type = LessonType.Exam;
    this.image = this.image || Exam.DEFAULT_IMAGE_SRC;
  }

}
