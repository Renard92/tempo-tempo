import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogMethod } from "../../decorators/LogMethod";
import { Achievement } from "../../models/common/user/Achievement";
import { Step } from "../../models/common/Step";

/*
 Generated class for the CursusProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AchievementProvider {

  achievements: Array<Achievement>;

  constructor(public http: HttpClient) {
    this.achievements = [];
    this.achievements.push(
      new Achievement()
        .withId('1')
        .withTitle('1 Exam')
        .withDescription('Lorem ipsum.')
        .withUnlocked(true)
        .withStep(
          new Step()
            .withTotal(1)
            .withCurrent(1)
        )
    );
    this.achievements.push(
      new Achievement()
        .withId('10')
        .withTitle('10 Exams')
        .withDescription('Lorem ipsum.')
        .withUnlocked(false)
        .withStep(
          new Step()
            .withTotal(10)
            .withCurrent(1)
        )
    )
  }

  @LogMethod()
  getAchievements(): Promise<Array<Achievement>> {
    return new Promise((resolve) => {
      resolve(this.achievements);
    });
  }

}
