import {Item} from "./Item";
import {Currency} from "./Currency";

export class Product extends Item {

  private _price: number = 0;
  private _currency: Currency;

  constructor (product: Product = <Product>{}) {
    super(product);
    this
      .withPrice(product.price)
      .withCurrency(product.currency);
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get currency(): Currency {
    return this._currency;
  }

  set currency(value: Currency) {
    this._currency = value;
  }

  withPrice (price: number) {
    this.price = price;
    return this;
  }

  withCurrency (currency: Currency) {
    this.currency = currency;
    return this;
  }

}
