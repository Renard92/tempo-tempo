import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen";
import {ContextProvider} from "../../providers/context/context";
import {ContextEvent} from "../../models/common/event/ContextEvent";
import {EmitterProvider} from "../../providers/emitter/emitter";

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen, public contextProvider: ContextProvider) {
  }

  ionViewDidEnter() {
    EmitterProvider.get(ContextEvent.INIT_SUCCESS).subscribe(() => {
      this.splashScreen.hide();
      this.viewCtrl.dismiss();
    });

    EmitterProvider.get(ContextEvent.INIT_ERROR).subscribe(() => {
      setTimeout(() => {
        this.contextProvider.init();
      }, 1000);
    });

    setTimeout(() => {
      this.contextProvider.init();
    }, 2400);
  }

}
