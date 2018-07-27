export interface IStep {
  total: number;
  current: number;

  up(): IStep;
  down(): IStep;
  isDone(): boolean;
}
