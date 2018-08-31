import { Component } from '@angular/core';
import { ContextProvider } from "../../providers/context/context";
import { Resource } from "../../models/common/cursus/Resource";

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

  resource: Resource;

  constructor(public contextProvider: ContextProvider) {
  }

  ngOnInit() {
    this.resource = this.contextProvider.getResource();
  }

}
