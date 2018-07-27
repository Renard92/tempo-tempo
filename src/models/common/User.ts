import {Profile} from "./user/Profile";

export class User {

  id: string;
  profile: Profile;

  constructor (id: string, profile: Profile) {
    this.id = id;
    this.profile = profile;
  }

}
