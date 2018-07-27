export class Rank {

  constructor (
    public id?: string,
    public title?: string,
    public icon?: string
  ) {
  }

  withId(id: string): Rank {
    this.id = id;
    return this;
  }

  withTitle(title: string): Rank {
    this.title = title;
    return this;
  }

  withIcon(icon: string): Rank {
    this.icon = icon;
    return this;
  }

}
