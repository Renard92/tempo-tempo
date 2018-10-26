export class Bag {

  private _notes: number = 0;
  private _crowns: number = 0;

  constructor (bag: Bag = <Bag>{}) {
    this
      .withNotes(bag.notes)
      .withCrowns(bag.crowns);
  }

  get notes(): number {
    return this._notes;
  }

  set notes(value: number) {
    this._notes = (value >= 0) ? value : 0;
  }

  get crowns(): number {
    return this._crowns;
  }

  set crowns(value: number) {
    this._crowns = (value >= 0) ? value : 0;
  }

  withNotes (notes: number): Bag {
    this.notes = notes;
    return this;
  }

  withCrowns (crowns: number): Bag {
    this.crowns = crowns;
    return this;
  }

}
