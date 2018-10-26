import { Component, Input } from '@angular/core';
import { Lesson } from "../../models/common/cursus/Lesson";
import {ContextProvider} from "../../providers/context/context";
import {Resource} from "../../models/common/cursus/Resource";
import {LessonType} from "../../models/common/cursus/LessonType";
import {TheoryPage} from "../../pages/theory/theory";
import {ModalController, NavController} from "ionic-angular";
import {ExercisePage} from "../../pages/exercise/exercise";
import {ExamPage} from "../../pages/exam/exam";
import {SubscribePage} from "../../pages/subscribe/subscribe";

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

  constructor (
    public contextProvider: ContextProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
  }

  presentLesson (lesson: Lesson) {
    let resource: Resource = this.contextProvider.getResource();

    if (lesson.type === LessonType.Theory && lesson.progress.isCompleted()) {
      this.presentTheory(lesson);
    } else if (resource.remove()) {
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
      this.presentSubscribe();
    }
  }

  presentTheory (lesson: Lesson) {
    let page = this.modalCtrl.create(TheoryPage, lesson);
    page.present();
    return page;
  }

  presentExercise (lesson: Lesson) {
    let page = this.modalCtrl.create(ExercisePage, lesson);
    page.present();
    return page;
  }

  presentExam (lesson: Lesson) {
    let page = this.modalCtrl.create(ExamPage, lesson);
    page.present();
    return page;
  }

  presentSubscribe () {
    let page = this.modalCtrl.create(SubscribePage);
    page.present();
    return page;
  }

  levelCls (lesson: Lesson): string {
    return LessonComponent.PREFIX_LEVEL_CLS + lesson.level;
  }

}
