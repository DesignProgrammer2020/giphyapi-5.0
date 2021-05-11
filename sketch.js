//giphy api
var api = "https://api.giphy.com/v1/gifs/search?";

//api key
var apiKey = "&api_key=nqDlsVpOUw2qbCA0kd9jn43RdX07aU7Q"

//search term
var query = "&q=environment";

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  console.log(`url=${url}`);
  loadJSON(url, gotData);
}

function gotData(giphy) {
  //for displaying multiple copies of the chosen image
  createImg(giphy.data[3].images.original.url, 'Happy Earth Day');
}
