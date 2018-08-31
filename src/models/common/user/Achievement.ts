import {Progress} from "../Progress";
import {Unlockable} from "../Unlockable";

export class Achievement implements Unlockable {

  constructor (
    public id?: string,
    public title?: string,
    public description?: string,
    public category?: string,
    public progress: Progress = new Progress(),
    public achievements: Array<Achievement> = []
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
