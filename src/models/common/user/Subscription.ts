import {Authority} from "./Authority";

export class Subscription {

  id: string;
  name: string;
  authorities: Array<Authority>;

  constructor (id: string, name: string, authorities: Array<Authority>) {
    this.id = id;
    this.name = name;
    this.authorities = authorities;
  }

}
