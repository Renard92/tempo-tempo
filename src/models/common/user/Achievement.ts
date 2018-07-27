import {Step} from "../Step";
import {Unlockable} from "../Unlockable";

export class Achievement implements Unlockable {

  constructor (
    public id?: string,
    public title?: string,
    public description?: string,
    public unlocked: boolean = false,
    public step: Step = new Step(),
  ) {
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  withUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
    return this;
  }

  withStep(step: Step) {
    this.step = step;
    return this;
  }

}
