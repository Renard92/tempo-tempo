import {Event} from "./Event";

export class ContextEvent extends Event {
  static PREFIX: string = Event.PREFIX + 'CONTEXT.';

  static INIT_SUCCESS: string = ContextEvent.PREFIX + 'INIT_SUCCESS';
  static INIT_FAILURE: string = ContextEvent.PREFIX + 'INIT_FAILURE';
}
