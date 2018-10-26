export class Rank {

  private _id: string;
  private _title: string;
  private _icon: string;

  constructor (rank: Rank = <Rank>{}) {
    this
      .withId(rank.id)
      .withTitle(rank.title)
      .withIcon(rank.icon);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
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
