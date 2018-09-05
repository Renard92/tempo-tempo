import {User} from "./User";
import {Student} from "./user/Student";
import {Teacher} from "./user/Teacher";

export class Classroom {

  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _creator: User = new User();
  private _teachers: Array<Teacher> = [];
  private _students: Array<Student> = [];

  constructor (classroom: Classroom = <Classroom>{}) {
    this
      .withId(classroom.id)
      .withName(classroom.name)
      .withDescription(classroom.description)
      .withCreator(new User(classroom.creator))
      .withStudents((classroom.students || []).map(Student.from))
      .withTeachers((classroom.teachers || []).map(Teacher.from));
  }

  public static from (classroom: Classroom): Classroom {
    return new Classroom(classroom);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get creator(): User {
    return this._creator;
  }

  set creator(value: User) {
    this._creator = value;
  }

  get teachers(): Array<Teacher> {
    return this._teachers;
  }

  set teachers(value: Array<Teacher>) {
    this._teachers = value;
  }

  get students(): Array<Student> {
    return this._students;
  }

  set students(value: Array<Student>) {
    this._students = value;
  }

  withId (id: string): Classroom {
    this.id = id;
    return this;
  }

  withName(name: string): Classroom {
    this.name = name;
    return this;
  }

  withDescription(description: string): Classroom {
    this.description = description;
    return this;
  }

  withCreator(creator: User): Classroom {
    this.creator = creator;
    return this;
  }

  withTeachers(teachers: Array<Teacher>): Classroom {
    this.teachers = teachers;
    return this;
  }

  withStudents(students: Array<Student>): Classroom {
    this.students = students;
    return this;
  }

}
