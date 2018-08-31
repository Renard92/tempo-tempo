import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from "../../models/common/onboarding/Slider";
import { LogMethod } from "../../decorators/LogMethod";

/*
  Generated class for the OnboardingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnboardingProvider {

  _sliders: Array<Slider>;

  constructor(public http: HttpClient) {
    this._sliders = [];
    this._sliders.push(
      new Slider()
        .withTitle("Welcome to Tempo Tempo!")
        .withDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus libero, non congue purus lacinia posuere.")
        .withImage("assets/imgs/onboarding/slider-img-1.svg")
    );
    this._sliders.push(
      new Slider()
        .withTitle("Invite your friends")
        .withDescription("Suspendisse finibus, neque id luctus commodo, lacus ante consequat justo, nec laoreet est eros malesuada enim.")
        .withImage("assets/imgs/onboarding/slider-img-2.svg")
    );
    this._sliders.push(
      new Slider()
        .withTitle("Sky is the limit")
        .withDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus libero, non congue purus lacinia posuere.")
        .withImage("assets/imgs/onboarding/slider-img-3.svg")
    );
  }

  @LogMethod()
  getSliders(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this._sliders);
    });
  }
}
