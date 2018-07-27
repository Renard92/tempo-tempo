import {User} from "./User";
import {Student} from "./user/Student";
import {Teacher} from "./user/Teacher";

export class Classroom {

  id: string;
  name: string;
  description: string;
  creator: User;
  teachers: Array<Teacher>;
  students: Array<Student>;

  constructor (id: string, name: string, description: string, creator: User, teachers: Array<Teacher>, students: Array<Student>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.teachers = teachers;
    this.students = students;
  }

}
