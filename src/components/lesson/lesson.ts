import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LessonComponent Component');
    this.text = 'Hello World';
  }

}
