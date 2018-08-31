import {Exception} from "./Exception";

export class MarketException extends Exception {
  static PREFIX: string = Exception.PREFIX + 'MARKET.';

  static CANNOT_LOAD_PRODUCTS: string = MarketException.PREFIX + 'CANNOT_LOAD_PRODUCTS';
  static CANNOT_BUY_PRODUCT: string = MarketException.PREFIX + 'CANNOT_BUY_PRODUCT';

  constructor (
    public id: string = MarketException.PREFIX + 'UNKNOWN',
    public reason: any = null,
    public message: any = null
  ) {
    super(id, reason, message);
  }

}
