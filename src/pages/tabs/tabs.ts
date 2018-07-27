import { Component } from '@angular/core';

import { ProfilePage } from "../profile/profile";
import { ClassroomPage } from "../classroom/classroom";
import { CoursePage } from "../course/course";
import { MarketPage } from "../market/market";

import { ModalController } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  coursePage = CoursePage;
  profilePage = ProfilePage;
  classroomPage = ClassroomPage;
  marketPage = MarketPage;

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }
}
