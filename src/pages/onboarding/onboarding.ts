import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OnboardingProvider } from "../../providers/onboarding/onboarding";
import { Slider } from "../../models/common/onboarding/Slider";

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  slides: Slider[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public onboardingProvider: OnboardingProvider) {
  }

  ionViewDidLoad() {
    this.onboardingProvider
      .getSliders()
      .then((sliders) => {
        this.slides = sliders;
      });
  }

  skip () {
    this.viewCtrl.dismiss();
  }

}
