enum Options {
  GREEN = '-green',
  RED = '-red',
  SUCCESS = '-success',
  FAIL = '-fail',
}

const classes = {
  [Options.GREEN]: 'green',
  [Options.RED]: 'red',
  [Options.SUCCESS]: 'green success',
  [Options.FAIL]: 'red fail',
};

export const getOutputLineClassname = (line: string) => {
  switch (line.startsWith('')) {
    case line.startsWith(Options.GREEN):
      return classes[Options.GREEN];
    case line.startsWith(Options.RED):
      return classes[Options.RED];
    case line.startsWith(Options.SUCCESS):
      return classes[Options.SUCCESS];
    case line.startsWith(Options.FAIL):
      return classes[Options.FAIL];
    default:
      return '';
  }
};
