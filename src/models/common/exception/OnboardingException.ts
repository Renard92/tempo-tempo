import {Exception} from "./Exception";

export class OnboardingException extends Exception {
  static PREFIX: string = Exception.PREFIX + 'ONBOARDING.';

  static CANNOT_LOAD_SLIDERS: string = OnboardingException.PREFIX + 'CANNOT_LOAD_SLIDERS';

  constructor (
    public id: string = OnboardingException.PREFIX + 'UNKNOWN',
    public reason: any = null,
    public message: any = null
  ) {
    super(id, reason, message);
  }

}
