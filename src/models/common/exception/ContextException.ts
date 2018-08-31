import {Exception} from "./Exception";

export class ContextException extends Exception {
  static PREFIX: string = Exception.PREFIX + 'CONTEXT.';

  static CANNOT_LOAD_USER: string = ContextException.PREFIX + 'CANNOT_LOAD_USER';
  static CANNOT_LOAD_USER_PROFILE: string = ContextException.PREFIX + 'CANNOT_LOAD_USER_PROFILE';
  static CANNOT_LOAD_COUNT_DOWN_RESOURCES: string = ContextException.PREFIX + 'CANNOT_LOAD_COUNT_DOWN_RESOURCES';

  constructor (
    public id: string = ContextException.PREFIX + 'UNKNOWN',
    public reason: any = null,
    public message: any = null
  ) {
    super(id, reason, message);
  }

}
