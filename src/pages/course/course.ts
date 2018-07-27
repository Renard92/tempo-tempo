import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chapter } from "../../models/common/cursus/Chapter";
import { CursusProvider } from "../../providers/cursus/cursus";
import {ContextProvider} from "../../providers/context/context";
import {Lesson} from "../../models/common/cursus/Lesson";

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  chapters: Chapter[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public cursusProvider: CursusProvider,
    public contextProvider: ContextProvider) {
  }

  ionViewDidLoad() {
    this.cursusProvider
      .getChapters()
      .then((chapters) => {
        this.chapters = chapters;
      });
  }

  presentLesson(lesson: Lesson) {
    this.contextProvider
      .getCountDownResource()
      .remove();
  }

}
