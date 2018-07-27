export class ContextEvent {
  static PREFIX: string = 'context';

  static INIT_SUCCESS: string = ContextEvent.PREFIX + '.init.success';
  static INIT_ERROR: string   = ContextEvent.PREFIX + '.init.error';
}
