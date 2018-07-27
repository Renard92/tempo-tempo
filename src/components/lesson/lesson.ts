import { Component, Input } from '@angular/core';
import { Lesson } from "../../models/common/cursus/Lesson";

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

  @Input()
  lesson: Lesson;

  constructor() {
  }

  ngOnInit() {
  }

}
