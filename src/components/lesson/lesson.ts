import { Component, Input } from '@angular/core';
import { Lesson } from "../../models/common/cursus/Lesson";
import {ContextProvider} from "../../providers/context/context";
import {CountDownResource} from "../../models/common/cursus/CountDownResource";
import {LessonType} from "../../models/common/cursus/LessonType";
import {TheoryPage} from "../../pages/theory/theory";
import {AlertController, ModalController, NavController} from "ionic-angular";
import {ExercisePage} from "../../pages/exercise/exercise";
import {ExamPage} from "../../pages/exam/exam";

/**
 * Generated class for the LessonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson',
  templateUrl: 'lesson.html'
})
export class LessonComponent {

  static PREFIX_LEVEL_CLS: string = 'level';

  @Input()
  lesson: Lesson;

  constructor(
    public contextProvider: ContextProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  presentLesson(lesson: Lesson) {
    let resource: CountDownResource = this.contextProvider.getCountDownResource();
    if (resource.remove()) {
      switch (lesson.type) {
        case LessonType.Theory:
          this.presentTheory(lesson);
          break;
        case LessonType.Exercise:
          this.presentExercise(lesson);
          break;
        case LessonType.Exam:
          this.presentExam(lesson);
          break;
      }
    } else {
      this.presentResourceAlert()
    }
  }

  presentTheory(lesson: Lesson) {
    let page = this.modalCtrl.create(TheoryPage, lesson);
    page.present();
    return page;
  }

  presentExercise(lesson: Lesson) {
    let page = this.modalCtrl.create(ExercisePage, lesson);
    page.present();
    return page;
  }

  presentExam(lesson: Lesson) {
    let page = this.modalCtrl.create(ExamPage, lesson);
    page.present();
    return page;
  }

  presentResourceAlert() {
    const confirm = this.alertCtrl.create({
      title: 'Not enough resources',
      message: 'You have to wait a few moments to recover some of them.. Or subscribe to be free!',
      buttons: [
        {
          text: 'Maybe later',
          handler: () => {
          }
        },
        {
          text: 'Subscribe',
          handler: () => {
            let resource = this.contextProvider.getCountDownResource();
            resource.recover();
          }
        }
      ]
    });
    confirm.present();
  }

  levelCls(lesson: Lesson): string {
    return LessonComponent.PREFIX_LEVEL_CLS + lesson.level;
  }

}
