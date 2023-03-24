import { CommentLabel } from '../types/comments';

export const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
export const CLIENT_ID_LOGIN = 'b67da247620e2e266ba4';
export const CLIENT_ID_REGISTRATION = 'ff8172a4250438893a45';
export const WS_URL = 'wss://rs-clone-server-qh63.onrender.com';
export const SUITE_START = '--suite-start--';
export const SUITE_END = '--suite-end--';
export const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/6301773?s=100';

export const filterLists = {
  sort: ['Newest', 'Oldest', 'Popularity', 'Hardest', 'Easiest', 'Name'],
  difficulty: ['8 kyu', '7 kyu', '6 kyu'],
  progress: ['All', 'Not trained', 'Not completed', 'Completed'],
  tags: [
    'Algorithms',
    'Arrays',
    'Binary',
    'Bits',
    'Data Structures',
    'Date Time',
    'Debugging',
    'Functional Programming',
    'Fundamentals',
    'Games',
    'Geometry',
    'Lists',
    'Logic',
    'Mathematics',
    'Object-oriented Programming',
    'Parsing',
    'Puzzles',
    'Recursion',
    'Refactoring',
    'Regular Expressions',
    'Sorting',
    'Strings',
  ],
};

type StringKeys = { [key: string]: number };
type NumberKeys = { [key: number]: number };
export const scoreNeededForRankingUp: NumberKeys = {
  7: 20,
  6: 76,
  5: 229,
  4: 643,
  3: 1768,
  2: 4829,
  1: 13147,
};
export const awardedScorePerKata: StringKeys = {
  '8 kyu': 2,
  '7 kyu': 3,
  '6 kyu': 8,
  '5 kyu': 21,
  '4 kyu': 55,
  '3 kyu': 149,
  '2 kyu': 404,
  '1 kyu': 1097,
};
export const awardedHonorPerKata: StringKeys = {
  '8 kyu': 2,
  '7 kyu': 2,
  '6 kyu': 8,
  '5 kyu': 8,
  '4 kyu': 32,
  '3 kyu': 32,
  '2 kyu': 128,
  '1 kyu': 128,
};
export const awardedHonorPerRankingUp: NumberKeys = {
  7: 20,
  6: 30,
  5: 45,
  4: 70,
  3: 100,
  2: 150,
  1: 225,
};

export const requiredHonorForPrivileges: { [key: number]: string } = {
  25: '25+ Honor: You now have the ability to vote on how satisfied you were with a kata',
  50: "50+ Honor: You now have the ability to mark another's comment as a spoiler",
  75: '75+ Honor: You now have the ability to estimate on what rank you think your beta kata should be',
  100: '100+ Honor: You now have the ability to vote on what rank you think a beta kata should be',
  300: '300+ Honor: You now have the ability to contribute your own kata to the community',
  500: "500+ Honor: You now have the ability to unmark another's comment as being a spoiler",
  1000: '1000+ Honor: Now your vote counts 2x towards getting a kata out of beta',
  2000: '2000+ Honor: Now your vote counts 3x towards getting a kata out of beta',
  3000: '3000+ Honor: Now your vote counts 4x towards getting a kata out of beta',
};

export const commentFormOptions: (CommentLabel | 'No label')[] = [
  'No label',
  'Issue',
  'Suggestion',
  'Question',
];

export const commentFormIcons: { [key: string]: string } = {
  Issue: 'icon-moon-issue',
  Suggestion: 'icon-moon-enhancement',
  Question: 'icon-moon-question',
};
