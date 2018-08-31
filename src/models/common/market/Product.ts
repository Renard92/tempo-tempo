export class Product {

  constructor(
    public code?: string,
    public name?: string,
    public description?: string,
    public image?: string,
    public price: number = 0, /* free */
    public bought: boolean = false
  ) {
  }

  withCode (code: string) {
    this.code = code;
    return this;
  }

  withName (name: string) {
    this.name = name;
    return this;
  }

  withDescription (description: string) {
    this.description = description;
    return this;
  }

  withImage (image: string) {
    this.image = image;
    return this;
  }

  withPrice (price: number) {
    this.price = price;
    return this;
  }

  withBought (bought: boolean) {
    this.bought = bought;
    return this;
  }

}
