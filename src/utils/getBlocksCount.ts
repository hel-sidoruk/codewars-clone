export function getBlocksCount(value: string, selectionEnd: number) {
  return value
    .substring(selectionEnd)
    .split('')
    .filter((el) => el === '}').length;
}
