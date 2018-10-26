import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LootBox} from "../../models/common/market/LootBox";
import {LogMethod} from "../../decorators/method/LogMethod";
import {MeasureMethod} from "../../decorators/method/MeasureMethod";

/*
  Generated class for the MarketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarketProvider {

  private _boxes: Array<any>;

  constructor (public http: HttpClient) {}

  @LogMethod
  getBoxes(): Promise<Array<LootBox>> {
    if (this._boxes) {
      return new Promise((resolve) => {
        resolve(this._boxes);
      });
    }
    return this.loadBoxes();
  }

  @LogMethod
  @MeasureMethod
  loadBoxes(): Promise<Array<LootBox>> {
    return new Promise((resolve) => setTimeout(() => {
      this._boxes = [
        new LootBox()
          .withPrice(0)
          .withCode('lorem')
          .withName('Lorem')
          .withDescription('Lorem.')
          .withImage('assets/icon/market/default-present-icon.svg'),
        new LootBox()
          .withPrice(20)
          .withCode('lorem-ipsum-long')
          .withName('Lorem ipsum long')
          .withDescription('Lorem ipsum.')
          .withImage('assets/icon/market/default-present-icon.svg'),
        new LootBox()
          .withPrice(5)
          .withCode('ipsum')
          .withName('Ipsum')
          .withDescription('Ipsum.')
          .withImage('assets/icon/market/default-present-icon.svg'),
        new LootBox()
          .withPrice(10)
          .withCode('lorem-ipsum')
          .withName('Lorem ipsum')
          .withDescription('Lorem ipsum.')
          .withImage('assets/icon/market/default-present-icon.svg'),
        new LootBox()
          .withPrice(15)
          .withCode('lorem-ipsum-very-long')
          .withName('Lorem ipsum very long')
          .withDescription('Lorem ipsum.')
          .withImage('assets/icon/market/default-present-icon.svg')
      ];
      resolve(this._boxes);
    }, 2500));
  }

}
