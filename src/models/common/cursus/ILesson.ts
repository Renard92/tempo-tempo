import {Step} from "../Step";
import {IUnlockable} from "../IUnlockable";

export interface ILesson extends IUnlockable {
  id: string;
  title: string;
  level: number;
  step: Step
}
