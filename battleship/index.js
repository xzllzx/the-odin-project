const Ship = (length) => {
  let timesHit = 0;

  const hit = () => {
    timesHit++;
  };
  const isSunk = () => {
    return timesHit >= length;
  };
  return { hit, isSunk };
};

const Gameboard = () => {};

const Player = () => {};
