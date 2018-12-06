import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from "../../models/common/cursus/Chapter";
import {LogMethod} from "../../decorators/method/LogMethod";
import {MeasureMethod} from "../../decorators/method/MeasureMethod";

/*
  Generated class for the CursusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursusProvider {

  _chapters: Array<Chapter>;

  constructor (public http: HttpClient) {}

  @LogMethod
  getChapters(): Promise<Array<Chapter>> {
    if (this._chapters) {
      return new Promise((resolve) => {
        resolve(this._chapters);
      });
    }
    return this.loadChapters();
  }

  @LogMethod
  @MeasureMethod
  loadChapters(): Promise<Array<Chapter>> {
    return new Promise((resolve) => {
      this.http.get('assets/data/course/chapters.json')
        .subscribe((json: Array<Chapter>) => {
          resolve(
            this._chapters = json
              .map(data => new Chapter(data))
          );
        });
    });
  }

}
