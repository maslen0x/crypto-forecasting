export const getDigitsCount = (value: number) => {
  const arr = value.toString().split(".");
  if (arr.length < 2) return 0;
  return arr[1].length;
};
