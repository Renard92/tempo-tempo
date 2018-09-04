import {Progress} from "../Progress";
import {Unlockable} from "../Unlockable";

export class Achievement implements Unlockable {

  private _id: string;
  private _title: string;
  private _description: string;
  private _category: string;
  private _progress: Progress = new Progress();
  private _achievements: Array<Achievement> = [];

  constructor (achievement: Achievement = <Achievement>{}) {
    this
      .withId(achievement.id)
      .withTitle(achievement.title)
      .withDescription(achievement.description)
      .withCategory(achievement.category)
      .withProgress(new Progress(achievement.progress))
      .withAchievements((achievement.achievements || []).map(Achievement.from))
  }

  public static from (achievement: Achievement): Achievement {
    return new Achievement(achievement);
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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get progress(): Progress {
    return this._progress;
  }

  set progress(value: Progress) {
    this._progress = value;
  }

  get achievements(): Array<Achievement> {
    return this._achievements;
  }

  set achievements(value: Array<Achievement>) {
    this._achievements = value;
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

  withCategory(category: string) {
    this.category = category;
    return this;
  }

  withProgress(progress: Progress) {
    this.progress = progress;
    return this;
  }

  withAchievements(achievements: Array<Achievement>) {
    this.achievements = achievements;
    return this;
  }

  isUnlocked () {
    return this.progress.isDone();
  }

}
