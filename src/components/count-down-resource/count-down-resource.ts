import { Component } from '@angular/core';
import { ContextProvider } from "../../providers/context/context";
import { CountDownResource } from "../../models/common/cursus/CountDownResource";

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

  resource: CountDownResource;

  constructor(public contextProvider: ContextProvider) {}

  async ngOnInit() {
    this.resource = await this.contextProvider.getCountDownResource();
  }

}
