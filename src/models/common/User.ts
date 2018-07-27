import {Profile} from "./user/Profile";

export class User {

  constructor (
    public id?: string,
    public profile: Profile = new Profile()
  ) {
  }

}
