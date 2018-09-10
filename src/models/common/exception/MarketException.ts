import {Exception} from "./Exception";

export class MarketException extends Exception {
  protected static readonly PREFIX: string = Exception.PREFIX + 'MARKET.';

  static readonly CANNOT_LOAD_PRODUCTS: string = MarketException.PREFIX + 'CANNOT_LOAD_PRODUCTS';
  static readonly CANNOT_BUY_PRODUCT: string = MarketException.PREFIX + 'CANNOT_BUY_PRODUCT';
}
