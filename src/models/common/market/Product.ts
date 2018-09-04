export class Product {

  private _code: string;
  private _name: string;
  private _description: string;
  private _image: string;
  private _price: number = 0;
  private _bought: boolean = false;

  constructor (product: Product = <Product>{}) {
    this
      .withCode(product.code)
      .withName(product.name)
      .withDescription(product.description)
      .withImage(product.image)
      .withPrice(product.price)
      .withBought(product.bought)
  }

  public static from (product: Product): Product {
    return new Product(product);

  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get bought(): boolean {
    return this._bought;
  }

  set bought(value: boolean) {
    this._bought = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  withCode (code: string): Product {
    this.code = code;
    return this;
  }

  withName (name: string): Product {
    this.name = name;
    return this;
  }

  withDescription (description: string): Product {
    this.description = description;
    return this;
  }

  withImage (image: string): Product {
    this.image = image;
    return this;
  }

  withPrice (price: number): Product {
    this.price = price;
    return this;
  }

  withBought (bought: boolean): Product {
    this.bought = bought;
    return this;
  }

}
