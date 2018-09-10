import {Exception} from "./Exception";

export class ContextException extends Exception {
  protected static readonly PREFIX: string = Exception.PREFIX + 'CONTEXT.';

  static readonly CANNOT_LOAD_USER: string = ContextException.PREFIX + 'CANNOT_LOAD_USER';
  static readonly CANNOT_LOAD_USER_PROFILE: string = ContextException.PREFIX + 'CANNOT_LOAD_USER_PROFILE';
  static readonly CANNOT_LOAD_COUNT_DOWN_RESOURCES: string = ContextException.PREFIX + 'CANNOT_LOAD_COUNT_DOWN_RESOURCES';

}
