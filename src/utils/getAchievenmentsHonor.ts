import { awardedHonorPerRankingUp } from './constants';

export function getAchievementsHonor(rank: number) {
  const arr = Object.keys(awardedHonorPerRankingUp)
    .map(Number)
    .filter((el) => el >= rank);
  let sum = 0;
  arr.forEach((num) => (sum += awardedHonorPerRankingUp[num]));
  return sum;
}
