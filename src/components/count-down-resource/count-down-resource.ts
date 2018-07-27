import { Component } from '@angular/core';

/**
 * Generated class for the CountDownResourceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'count-down-resource',
  templateUrl: 'count-down-resource.html'
})
export class CountDownResourceComponent {

  text: string;

  constructor() {
    console.log('Hello CountDownResourceComponent Component');
    this.text = 'Hello World';
  }

}
