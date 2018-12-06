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
    return new Promise((resolve) => {
      this.http.get('assets/data/market/loot-boxes.json')
        .subscribe((json: Array<LootBox>) => {
          resolve(
            this._boxes = json
              .map((data) => new LootBox(data))
              .sort(MarketProvider.sortLootBoxesByPrice)
          );
        });
    });
  }

  /**
   * @param a {LootBox}
   * @param b {LootBox}
   */
  private static sortLootBoxesByPrice (a, b): number {
    return a.price - b.price;
  }

}
