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

function gotData(data) {
  //for displaying object, pagination, and meta
  // print(data);

  //for displaying the link to the chosen image listed in the search query (api + apiKey + query)
  //happy earth day
  print(data.data[3].images.original.url);
}

function gotData(giphy) {
  //for displaying all the images listed in the search query
  for (var i=0; i<giphy.data.length; i++) {
    //createImg(giphy.data[i].images.original.url, 'altText');
  }
  //for displaying multiple copies of the chosen image
  createImg(giphy.data[3].images.original.url, 'Happy Earth Day');
}
