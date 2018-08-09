export interface Stepable {
  total: number;
  current: number;

  up(): Stepable;
  down(): Stepable;
  isDone(): boolean;
}
