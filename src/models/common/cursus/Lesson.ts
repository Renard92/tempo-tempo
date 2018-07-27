import {Step} from "./Step";

export class Exercise {

  id: string;
  title: string;
  description: string;
  steps: Array<Step>;

  constructor (id: string, title: string, description: string, steps: Array<Step>) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.steps = steps;
  }

  isDone () {
    return this.steps.every(function (step) {
      return step.done;
    });
  }

}
