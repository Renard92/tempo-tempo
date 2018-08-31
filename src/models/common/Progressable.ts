export interface Progressable {
  total: number;
  current: number;

  up(): Progressable;
  down(): Progressable;
  isDone(): boolean;
}
