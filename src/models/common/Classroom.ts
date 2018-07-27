import {User} from "./User";
import {Student} from "./user/Student";
import {Teacher} from "./user/Teacher";

export class Classroom {

  constructor (
    public id?: string,
    public name?: string,
    public description?: string,
    public creator: User = new User(),
    public teachers: Array<Teacher> = [],
    public students: Array<Student> = []
  ) {
  }

}
