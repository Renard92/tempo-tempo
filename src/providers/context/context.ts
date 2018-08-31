import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogMethod } from "../../decorators/LogMethod";
import { Resource } from "../../models/common/cursus/Resource";
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
  private _resource: Resource;

  constructor(public http: HttpClient) {
    this._user = new User();
    this._resource = new Resource();
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
        EmitterProvider.get(ContextEvent.INIT_FAILURE).emit(reason);
      });
    }
  }

  @LogMethod()
  loadCountDownResource(): Promise<Resource> {
    return new Promise((resolve) => {
      resolve(this._resource);
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

  getResource(): Resource {
    return this._resource;
  }

}
