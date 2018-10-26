import {Authority} from "./Authority";

export class Subscription {

  private _id: string;
  private _name: string;
  private _description: string;
  private _authorities: Array<Authority> = [];

  constructor (subscription: Subscription = <Subscription>{}) {
    this
      .withId(subscription.id)
      .withName(subscription.name)
      .withDescription(subscription.description)
      .withAuthorities(subscription.authorities);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get authorities(): Array<Authority> {
    return this._authorities;
  }

  set authorities(value: Array<Authority>) {
    this._authorities = value || [];
  }

  withId(id: string): Subscription {
    this.id = id;
    return this;
  }

  withName(name: string): Subscription {
    this.name = name;
    return this;
  }

  withDescription(description: string): Subscription {
    this.description = description;
    return this;
  }

  withAuthorities(authorities: Array<Authority>): Subscription {
    this.authorities = authorities;
    return this;
  }

}
