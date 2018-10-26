import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievement } from "../../models/common/user/Achievement";
import { Progress } from "../../models/common/Progress";
import {LogMethod} from "../../decorators/method/LogMethod";

/*
 Generated class for the CursusProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AchievementProvider {

  _achievements: Array<Achievement>;

  constructor(public http: HttpClient) {
    this._achievements = [
      new Achievement()
        .withId('1')
        .withTitle('1 Exam')
        .withDescription('Lorem ipsum.')
        .withCategory('Course')
        .withProgress(
          new Progress()
            .withTotal(1)
            .withCurrent(1)
        ),
      new Achievement()
        .withId('10')
        .withTitle('10 Exams')
        .withDescription('Lorem ipsum.')
        .withCategory('Course')
        .withProgress(
          new Progress()
            .withTotal(10)
            .withCurrent(1)
        ),
      new Achievement()
        .withId('first-chapter')
        .withTitle('First chapter')
        .withDescription('Finish the first chapter.')
        .withCategory('Course')
        .withProgress(
          new Progress()
            .withTotal(1)
            .withCurrent(1)
        )
        .withAchievements([
          new Achievement()
            .withId('notes-exam')
            .withTitle('Notes exam')
            .withDescription('Lorem ipsum.')
            .withCategory('Course')
            .withProgress(
              new Progress()
                .withTotal(1)
                .withCurrent(1)
            )
        ])
    ];
  }

  @LogMethod
  getAchievements(): Promise<Array<Achievement>> {
    return new Promise((resolve) => {
      resolve(this._achievements);
    });
  }

}
