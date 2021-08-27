const MIN = 0.7;
const MAX = 1;

export const RandomColor = () => {
  return Math.floor((Math.random() * (MAX - MIN) + MIN) * 16777215).toString(
    16
  );
};
