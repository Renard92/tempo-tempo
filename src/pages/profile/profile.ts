import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Achievement} from "../../models/common/user/Achievement";
import {AchievementProvider} from "../../providers/achievement/achievement";
import {Skeleton} from "../../models/design/Skeleton";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  skeleton: Skeleton = new Skeleton();

  achievements: Achievement[];

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public achievementProvider: AchievementProvider
  ) {
    this.skeleton.withPart('achievements', 10);
  }

  async ionViewDidLoad() {
    this.loadAchievements();
  }

  loadAchievements(): void {
    this.achievementProvider
      .getAchievements()
      .then((achievements) => {
        this.achievements = achievements;
      });
  }

}
