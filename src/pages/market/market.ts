import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MarketProvider} from "../../providers/market/market";
import {LootBox} from "../../models/common/market/LootBox";
import {Skeleton} from "../../models/design/Skeleton";

/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  skeleton: Skeleton;

  boxes: LootBox[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public marketProvider: MarketProvider) {
    this.skeleton = new Skeleton().withPart('boxes');
  }

  ionViewDidLoad() {
    this.marketProvider
      .getBoxes()
      .then((boxes) => {
        this.boxes = boxes;
      });
  }


}
