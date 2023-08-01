const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const img = document.querySelector("img");

fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=cats`,
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
