import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter } from "../../models/common/cursus/Chapter";
import { CursusProvider } from "../../providers/cursus/cursus";
import {Skeleton} from "../../models/design/Skeleton";

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

  skeleton: Skeleton = new Skeleton();

  chapters: Chapter[];

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public cursusProvider: CursusProvider
  ) {
    this.skeleton.withPart('chapters');
  }

  ionViewDidLoad() {
    this.loadChapters();
  }

  loadChapters(): void {
    this.cursusProvider
      .getChapters()
      .then((chapters) => {
        this.chapters = chapters;
      });
  }

}
