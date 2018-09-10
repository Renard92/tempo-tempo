import {Exception} from "./Exception";

export class CourseException extends Exception {
  protected static readonly PREFIX: string = Exception.PREFIX + 'COURSE.';

  static readonly CANNOT_LOAD_CHAPTERS: string = CourseException.PREFIX + 'CANNOT_LOAD_CHAPTERS';
  static readonly CANNOT_LOAD_EXERCISE: string = CourseException.PREFIX + 'CANNOT_LOAD_EXERCISE';
  static readonly CANNOT_LOAD_EXAM: string = CourseException.PREFIX + 'CANNOT_LOAD_EXAM';

}
