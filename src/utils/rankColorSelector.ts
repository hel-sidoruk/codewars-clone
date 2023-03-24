export const rankColorSelector = (rank: number): string => {
  let res = '';
  switch (rank) {
    case 7:
      res = 'white';
      break;
    case 6:
    case 5:
      res = 'yellow';
      break;
    case 4:
    case 3:
      res = 'blue';
      break;
    case 2:
    case 1:
      res = 'purple';
      break;
  }
  return res;
};
