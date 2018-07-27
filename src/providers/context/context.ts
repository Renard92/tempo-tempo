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
  private _loaded: boolean = false;

  private _user: User;
  private _countDownResource: CountDownResource;

  constructor(public http: HttpClient) {
    this._user = new User();
    this._countDownResource = new CountDownResource();
  }

  @LogMethod()
  init() {
    if (this._loaded) {
      EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
    } else {
      Promise.all([
        this.loadUser(),
        this.loadCountDownResource()
      ]).then(() => {
        this._loaded = true;
        EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
      }).catch(reason => {
        EmitterProvider.get(ContextEvent.INIT_ERROR).emit(reason);
      });
    }
  }

  @LogMethod()
  loadCountDownResource(): Promise<CountDownResource> {
    return new Promise((resolve) => {
      resolve(this._countDownResource);
    });
  }

  @LogMethod()
  loadUser(): Promise<User> {
    return new Promise((resolve) => {
      resolve(this._user);
    });
  }

  isLoaded(): boolean {
    return this._loaded;
  }

  getUser(): User {
    return this._user;
  }

  getCountDownResource(): CountDownResource {
    return this._countDownResource;
  }

}
