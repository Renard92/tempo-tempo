export interface Throwable {
  id: string;
  reasons: Array<string>;
  stacks: Array<Throwable>;

  log();
}
