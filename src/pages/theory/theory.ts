import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Theory} from "../../models/common/cursus/Theory";

/**
 * Generated class for the TheoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theory',
  templateUrl: 'theory.html',
})
export class TheoryPage {

  theory: Theory;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.theory = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  back () {
    this.viewCtrl.dismiss();
  }

  understood () {
    this.theory.step.up();

    this.viewCtrl.dismiss();
  }

}
