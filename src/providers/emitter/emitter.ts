import {Injectable, EventEmitter} from '@angular/core';
import {LogMethod} from "../../decorators/method/LogMethod";

@Injectable()
export class EmitterProvider {

  /**
   * Events store
   * @type {{}}
   * @private
   */
  private static _emitters: { [id: string]: EventEmitter<any> } = {};

  /**
   * Try to get an event via the passed id.
   * If the event does not exist in the store, it will be created.
   *
   * @param id
   * @return {EventEmitter<any>}
   */
  @LogMethod
  static get(id: string): EventEmitter<any> {
    if (!this._emitters[id]) {
      this._emitters[id] = new EventEmitter();
    }
    return this._emitters[id];
  }
}
