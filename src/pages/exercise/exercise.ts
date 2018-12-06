import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Exercise} from "../../models/common/cursus/Exercise";

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  exercise: Exercise;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    this.exercise = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  back () {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure you want to leave?',
      message: 'Any progress will be lost.',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Leave',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

}
