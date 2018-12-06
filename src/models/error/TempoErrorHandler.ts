import {ErrorHandler, Injectable} from "@angular/core";
import {LogMethod} from "../../decorators/method/LogMethod";
import {ModalController} from "ionic-angular";
import {ErrorPage} from "../../pages/error/error";
import {TempoError} from "./TempoError";

@Injectable()
export class TempoErrorHandler implements ErrorHandler {

  _page: any;

  constructor (public modalCtrl: ModalController) {}

  @LogMethod
  handleError (error: TempoError): any {
    this.presentError(error);
    return error;
  }

  presentError (error: any) {
    if (!this._page) {
      this._page = this.modalCtrl.create(ErrorPage, error);
      this._page.present();
    }
    return this._page;
  }

}
