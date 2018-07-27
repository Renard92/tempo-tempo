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

  sliders: Array<Slider>;

  constructor(public http: HttpClient) {
    this.sliders = new Array<Slider>(
      {
        title: "Welcome to Tempo Tempo!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus libero, non congue purus lacinia posuere.",
        image: "assets/imgs/onboarding/slider-img-1.svg",
      },
      {
        title: "Invite your friends",
        description: "Suspendisse finibus, neque id luctus commodo, lacus ante consequat justo, nec laoreet est eros malesuada enim.",
        image: "assets/imgs/onboarding/slider-img-2.svg",
      },
      {
        title: "Sky is the limit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus libero, non congue purus lacinia posuere.",
        image: "assets/imgs/onboarding/slider-img-3.svg",
      }
    );
  }

  @LogMethod()
  getSliders(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.sliders);
    });
  }
}
