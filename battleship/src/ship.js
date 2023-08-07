const Ship = (coordinateList) => {
  let length = coordinateList.length;
  let timesHit = 0;

  const shipType = () => {
    const shipTypeList = ["Destroyer", "Submarine", "Battleship", "Carrier"];
    return shipTypeList[length - 1];
  };
  const hit = () => {
    timesHit++;
    return timesHit;
  };
  const isSunk = () => {
    return timesHit >= length;
  };
  return { shipType, hit, isSunk };
};

module.exports = {
  Ship,
};
