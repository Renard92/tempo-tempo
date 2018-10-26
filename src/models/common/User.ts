import {Profile} from "./user/Profile";

export class User {

  private _id: string;
  private _profile: Profile = new Profile();

  constructor (user: User = <User>{}) {
    this
      .withId(user.id)
      .withProfile(new Profile(user.profile));
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get profile(): Profile {
    return this._profile;
  }

  set profile(value: Profile) {
    this._profile = value;
  }

  withId (id: string): User {
    this.id = id;
    return this;
  }

  withProfile (profile: Profile): User {
    this.profile = profile;
    return this;
  }

}
