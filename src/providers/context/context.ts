import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogMethod } from "../../decorators/LogMethod";
import { CountDownResource } from "../../models/common/cursus/CountDownResource";
import { EmitterProvider } from "../emitter/emitter";
import { ContextEvent } from "../../models/common/event/ContextEvent";
import { User } from "../../models/common/User";

/*
  Generated class for the ContextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContextProvider {
  private loaded: boolean = false;

  private user: User;
  private countDownResource: CountDownResource;

  constructor(public http: HttpClient) {
    this.user = new User(null, null);
    this.countDownResource = new CountDownResource();
  }

  @LogMethod()
  init() {
    if (this.loaded) {
      EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
    } else {
      Promise.all([
        this.loadUser(),
        this.loadCountDownResource()
      ]).then(() => {
        this.loaded = true;
        EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
      }).catch(reason => {
        EmitterProvider.get(ContextEvent.INIT_ERROR).emit(reason);
      });
    }
  }

  @LogMethod()
  loadCountDownResource(): Promise<CountDownResource> {
    return new Promise((resolve) => {
      resolve(this.countDownResource);
    });
  }

  @LogMethod()
  loadUser(): Promise<User> {
    return new Promise((resolve) => {
      resolve(this.user);
    });
  }

  get isLoaded(): boolean {
    return this.loaded;
  }

  get getUser(): User {
    return this.user;
  }

  get getCountDownResource(): CountDownResource {
    return this.countDownResource;
  }

}
