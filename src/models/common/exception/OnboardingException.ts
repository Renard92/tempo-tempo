import {Exception} from "./Exception";

export class OnboardingException extends Exception {
  protected static readonly PREFIX: string = Exception.PREFIX + 'ONBOARDING.';

  static readonly CANNOT_LOAD_SLIDERS: string = OnboardingException.PREFIX + 'CANNOT_LOAD_SLIDERS';
}
