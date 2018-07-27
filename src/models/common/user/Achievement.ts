export class Achievement {

  id: string;
  title: string;
  description: string;
  stepTotal: number;
  stepCurrent: number;

  constructor (id: string, title: string, description: string, stepTotal: number, stepCurrent: number, done: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.stepTotal = stepTotal;
    this.stepCurrent = stepCurrent;
  }

  isDone () {
    return this.stepCurrent === this.stepTotal;
  }

}
