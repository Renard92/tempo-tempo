import {Authority} from "./Authority";

export class Subscription {

  constructor (
    public id?: string,
    public name?: string,
    public authorities: Array<Authority> = []
  ) {
  }

  withId(id: string): Subscription {
    this.id = id;
    return this;
  }

  withName(name: string): Subscription {
    this.name = name;
    return this;
  }

  withAuthorities(authorities: Array<Authority>): Subscription {
    this.authorities = authorities;
    return this;
  }

}
