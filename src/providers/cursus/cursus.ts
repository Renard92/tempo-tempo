import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from "../../models/common/cursus/Chapter";
import { LogMethod } from "../../decorators/LogMethod";
import { Theory } from "../../models/common/cursus/Theory";
import { Exam } from "../../models/common/cursus/Exam";
import { Exercise } from "../../models/common/cursus/Exercise";
import { Progress } from "../../models/common/Progress";

/*
  Generated class for the CursusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursusProvider {

  _chapters: Array<Chapter>;

  constructor(public http: HttpClient) {
    this._chapters = [];
    this._chapters.push(
      new Chapter()
        .withId('chapter-1')
        .withTitle('Chapter 1')
        .withUnlocked(true)
        .withLessons([
          new Theory()
            .withId('chapter-1-lesson-1')
            .withTitle('Music notes')
            .withDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci justo, placerat ac aliquam eu, pulvinar sit amet ex.')
            .withLevel(1)
            .withProgress(
              new Progress()
                .withTotal(1)
                .withCurrent(0)
            ),
          new Exercise()
            .withId('chapter-1-lesson-1.1')
            .withTitle('Music notes : Exercise 1')
            .withDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
            .withLevel(2)
            .withProgress(
              new Progress()
                .withTotal(3)
                .withCurrent(1)
            ),
          new Exercise()
            .withId('chapter-1-lesson-1.2')
            .withTitle('Music notes : Exercise 2')
            .withDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci justo.')
            .withLevel(3)
            .withProgress(
              new Progress()
                .withTotal(3)
                .withCurrent(1)
            ),
          new Exercise()
            .withId('chapter-1-lesson-1.3')
            .withTitle('Music notes : Exercise 3')
            .withDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci justo, placerat ac aliquam eu.')
            .withLevel(4)
            .withProgress(
              new Progress()
                .withTotal(3)
                .withCurrent(2)
            ),
          new Exam()
            .withId('chapter-1-exam')
            .withTitle('Bases')
            .withDescription('Lorem ipsum dolor sit amet. Etiam orci justo, placerat ac aliquam eu, pulvinar sit amet ex.')
            .withLevel(5)
            .withProgress(
              new Progress()
                .withTotal(1)
                .withCurrent(1)
            )
        ])
    )
  }

  @LogMethod()
  getChapters(): Promise<Array<Chapter>> {
    return new Promise((resolve) => {
      resolve(this._chapters);
    });
  }

}
