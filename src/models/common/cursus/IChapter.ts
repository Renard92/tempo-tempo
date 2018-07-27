import {Lesson} from "./Lesson";
import {IUnlockable} from "../IUnlockable";

export interface IChapter extends IUnlockable {
  id: string;
  title: string;
  lessons: Array<Lesson>;
}
