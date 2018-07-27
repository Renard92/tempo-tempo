import {Step} from "../Step";
import {IUnlockable} from "../IUnlockable";

export interface IAchievement extends IUnlockable {
  id: string;
  title: string;
  description: string;
  step: Step
}
