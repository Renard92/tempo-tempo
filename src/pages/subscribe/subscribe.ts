import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ContextProvider} from "../../providers/context/context";

/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
})
export class SubscribePage {

  public info: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public contextProvider: ContextProvider,
  ) {
  }

  ngOnInit() {
    this.info = {
      image: 'assets/imgs/subscribe-to-be-free.png',
      title: 'Want to be free?',
      description: 'Lorem <b>ipsum dolor</b> sit amet, consectetur adipiscing elit. Etiam orci justo, placerat ac aliquam eu, pulvinar sit amet ex.'
    };
  }

  close () {
    this.viewCtrl.dismiss();
  }

  subscribe () {
    this.contextProvider
      .getResource()
      .recover();

    this.viewCtrl.dismiss();
  }

}
