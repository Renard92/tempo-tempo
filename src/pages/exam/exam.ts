import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Exam} from "../../models/common/cursus/Exam";

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  exam: Exam;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    this.exam = this.navParams.data;
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
          text: 'Retry later',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

}
