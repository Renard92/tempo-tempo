import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from "../../models/common/onboarding/Slider";
import {LogMethod} from "../../decorators/method/LogMethod";
import {MeasureMethod} from "../../decorators/method/MeasureMethod";

/*
  Generated class for the OnboardingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnboardingProvider {

  _sliders: Array<Slider>;

  constructor (public http: HttpClient) {}

  @LogMethod
  getSliders(): Promise<Array<Slider>> {
    if (this._sliders) {
      return new Promise((resolve) => {
        resolve(this._sliders);
      });
    }
    return this.loadSliders();
  }

  @LogMethod
  @MeasureMethod
  loadSliders(): Promise<Array<Slider>> {
    return new Promise((resolve) => {
      this.http.get('assets/data/onboarding/sliders.json')
        .subscribe((json: Array<Slider>) => {
          resolve(
            this._sliders = json
              .map((data) => new Slider(data))
          );
        });
    });
  }
}
