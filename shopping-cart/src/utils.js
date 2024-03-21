function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function genRandomArray(arrayLength) {
  const arrayToTwelve = Array.from(
    { length: arrayLength },
    (_, index) => index
  );

  for (let i = arrayLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayToTwelve[i], arrayToTwelve[j]] = [arrayToTwelve[j], arrayToTwelve[i]];
  }

  return arrayToTwelve;
}

function mapArrayToObject(arr) {
  const product = {};

  arr.forEach((element, index) => {
    product[index] = {
      name: element,
      price: 0,
      count: 0,
    };
  });
  return product;
}

export { capitalizeFirstLetter, genRandomArray, mapArrayToObject };
