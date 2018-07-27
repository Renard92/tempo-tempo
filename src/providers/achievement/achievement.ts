import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogMethod } from "../../decorators/LogMethod";
import { Achievement } from "../../models/common/user/Achievement";
import { Step } from "../../models/common/Step";
import {IAchievement} from "../../models/common/user/IAchievement";
import {IStep} from "../../models/common/IStep";

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
      new Achievement(<IAchievement>{
        id: '1',
        title: '1 Exam',
        description: 'Lorem ipsum.',
        unlocked: true,
        step: new Step(<IStep>{
          total: 1,
          current: 1
        })
      })
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
