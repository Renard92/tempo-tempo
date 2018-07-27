import { Component } from '@angular/core';
import { ModalController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from "../pages/splash/splash";
import { OnboardingPage } from "../pages/onboarding/onboarding";
import { ContextProvider } from "../providers/context/context";
import { EmitterProvider } from "../providers/emitter/emitter";
import { ContextEvent } from "../models/common/event/ContextEvent";
import {ErrorPage} from "../pages/error/error";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  modalCtrl: ModalController;

  constructor(platform: Platform, statusBar: StatusBar, modalCtrl: ModalController, public contextProvider: ContextProvider) {
    this.modalCtrl = modalCtrl;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      EmitterProvider.get(ContextEvent.INIT_SUCCESS).subscribe(() => {
        this.presentHome();
        this.presentOnboarding();
      });

      this.presentSplash();
    });
  }

  /**
   * @return {SplashPage}
   */
  presentSplash() {
    let splash = this.modalCtrl.create(SplashPage);
    splash.present();
    return splash;
  }

  /**
   * @return {OnboardingPage}
   */
  presentOnboarding() {
    let onboarding = this.modalCtrl.create(OnboardingPage);
    onboarding.present();
    return onboarding;
  }

  /**
   * @return {ErrorPage}
   */
  presentError() {
    let error = this.modalCtrl.create(ErrorPage);
    error.present();
    return error;
  }

  presentHome() {
    this.rootPage = TabsPage;
  }

}
