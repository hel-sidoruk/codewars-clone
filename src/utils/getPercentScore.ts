export function getPercentScore(next: number, current: number, fixNum: number): number {
  return +(100 * (current / next)).toFixed(fixNum);
}
