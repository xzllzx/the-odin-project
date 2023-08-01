const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
const img = document.querySelector("img");

function fetchGif(searchTerm) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

// fetchGif("cats");

async function asyncFetchGif(searchTerm) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm}`,
    { mode: "cors" }
  );
  const responseJson = await response.json();
  img.src = responseJson.data.images.original.url;
}

asyncFetchGif("cats");
