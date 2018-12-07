import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievement } from "../../models/common/user/Achievement";
import {LogMethod} from "../../decorators/method/LogMethod";
import {MeasureMethod} from "../../decorators/method/MeasureMethod";

/*
 Generated class for the CursusProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AchievementProvider {

  _achievements: Array<Achievement>;

  constructor(public http: HttpClient) {}

  @LogMethod
  getAchievements(): Promise<Array<Achievement>> {
    if (this._achievements) {
      return new Promise((resolve) => {
        resolve(this._achievements);
      });
    }
    return this.loadAchievements();
  }

  @LogMethod
  @MeasureMethod
  loadAchievements(): Promise<Array<Achievement>> {
    return new Promise((resolve) => {
      this.http.get('assets/data/achievement/achievements.json')
        .subscribe((json: Array<Achievement>) => {
          resolve(
            this._achievements = json
              .map(data => new Achievement(data))
              .sort(AchievementProvider.sortAchievementsByProgress)
          );
        });
    });
  }

  /**
   * @param a {Achievement}
   * @param b {Achievement}
   */
  private static sortAchievementsByProgress (a, b): number {
    return b.progress.percentage - a.progress.percentage;
  }

}
