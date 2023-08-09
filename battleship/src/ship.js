const Ship = (shipId, coordinateList) => {
  const shipTypeList = ["Destroyer", "Submarine", "Battleship", "Carrier"];

  let length = coordinateList.length;
  let timesHit = 0;

  const shipType = () => {
    return shipTypeList[shipId];
  };
  const hit = () => {
    timesHit++;
    return timesHit;
  };
  const isSunk = () => {
    return timesHit >= length;
  };
  return { shipId, shipType, hit, isSunk };
};

module.exports = {
  Ship,
};
