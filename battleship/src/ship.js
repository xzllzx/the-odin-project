const Ship = (coordinateList) => {
  let length = coordinateList.length;
  let timesHit = 0;

  const hit = () => {
    timesHit++;
    return timesHit;
  };
  const isSunk = () => {
    return timesHit >= length;
  };
  return { hit, isSunk };
};

module.exports = {
  Ship,
};
