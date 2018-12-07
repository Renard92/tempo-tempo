import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountDownResource } from "../../models/common/cursus/CountDownResource";
import { EmitterProvider } from "../emitter/emitter";
import { ContextEvent } from "../../models/common/event/ContextEvent";
import { User } from "../../models/common/User";
import {MeasureMethod} from "../../decorators/method/MeasureMethod";
import {LogMethod} from "../../decorators/method/LogMethod";

/*
  Generated class for the ContextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContextProvider {
  private _loaded: boolean = false;

  private _user: User;
  private _resource: CountDownResource;

  constructor(public http: HttpClient) {
    this._user = new User();
  }

  @LogMethod
  @MeasureMethod
  init() {
    if (this._loaded) {
      EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
    } else {
      Promise
        .all([
          this.loadUser(),
          this.loadCountDownResource()
        ])
        .then(() => {
          this._loaded = true;
          EmitterProvider.get(ContextEvent.INIT_SUCCESS).emit({});
        })
        .catch((reason) => {
          EmitterProvider.get(ContextEvent.INIT_FAILURE).emit(reason);
        });
    }
  }

  isLoaded(): boolean {
    return this._loaded;
  }

  @LogMethod
  getUser(): Promise<User> {
    if (this._user) {
      return new Promise((resolve) => {
        resolve(this._user);
      });
    }
    return this.loadUser();
  }

  @LogMethod
  @MeasureMethod
  loadUser(): Promise<User> {
    return new Promise((resolve) => {
      this.http.get('assets/data/context/user.json')
        .subscribe((json: User) => {
          resolve(this._user = new User(json));
        });
    });
  }

  @LogMethod
  getCountDownResource(): Promise<CountDownResource> {
    if (this._resource) {
      return new Promise((resolve) => {
        resolve(this._resource);
      });
    }
    return this.loadCountDownResource();
  }

  @LogMethod
  @MeasureMethod
  loadCountDownResource(): Promise<CountDownResource> {
    return new Promise((resolve) => {
      this.http.get('assets/data/context/count-down-resource.json')
        .subscribe((json: CountDownResource) => {
          resolve(this._resource = new CountDownResource(json));
        });
    });
  }

}
