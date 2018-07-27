import {IAchievement} from "./IAchievement";
import {Step} from "../Step";

export class Achievement implements IAchievement {

  public id: string;
  public title: string;
  public description: string;
  public unlocked: boolean;
  public step: Step;

  constructor (
    parameters: IAchievement = <IAchievement>{}
  ) {
    this.id = parameters.id;
    this.title = parameters.title;
    this.description = parameters.description;
    this.unlocked = parameters.unlocked;
    this.step = parameters.step;
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
