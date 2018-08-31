import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from "../../models/common/market/Product";
import {LogMethod} from "../../decorators/LogMethod";

/*
  Generated class for the MarketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarketProvider {

  private _products: Array<Product>;

  constructor(public http: HttpClient) {
    this._products = [
      new Product()
        .withCode('lorem')
        .withName('Lorem')
        .withDescription('Lorem.')
        .withImage('')
        .withPrice(0)
        .withBought(true),
      new Product()
        .withCode('ipsum')
        .withName('Ipsum')
        .withDescription('Ipsum.')
        .withImage('')
        .withPrice(0)
        .withBought(false),
      new Product()
        .withCode('lorem-ipsum')
        .withName('Lorem ipsum')
        .withDescription('Lorem ipsum.')
        .withImage('')
        .withPrice(10)
        .withBought(false)
    ];
  }

  @LogMethod()
  getProducts(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this._products);
    });
  }

}
