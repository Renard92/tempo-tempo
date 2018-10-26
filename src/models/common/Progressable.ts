export interface Progressable {
  total: number;
  current: number;

  up(): Progressable;
  down(): Progressable;
  reset(): Progressable;
  isCompleted(): boolean;
}
