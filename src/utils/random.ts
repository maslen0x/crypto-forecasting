export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArray = (length: number, min: number, max: number) => {
  const randomNumbers = [];
  for (let i = 0; i < length; i++) {
    randomNumbers.push(getRandom(min, max));
  }
  return randomNumbers;
};
