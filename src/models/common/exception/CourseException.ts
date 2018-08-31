import {Exception} from "./Exception";

export class CourseException extends Exception {
  static PREFIX: string = Exception.PREFIX + 'COURSE.';

  static CANNOT_LOAD_CHAPTERS: string = CourseException.PREFIX + 'CANNOT_LOAD_CHAPTERS';
  static CANNOT_LOAD_EXERCISE: string = CourseException.PREFIX + 'CANNOT_LOAD_EXERCISE';
  static CANNOT_LOAD_EXAM: string = CourseException.PREFIX + 'CANNOT_LOAD_EXAM';

  constructor (
    public id: string = CourseException.PREFIX + 'UNKNOWN',
    public reason: any = null,
    public message: any = null
  ) {
    super(id, reason, message);
  }

}
