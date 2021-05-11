//giphy api
var api = "https://api.giphy.com/v1/gifs/search?";

//api key
var apiKey = "&api_key=dc6zaTOxFJmzC"

//search term
// var query = "&q=kitten";
// var query = "&q=happy";
// var query = "&q=cat";
// var query = "&q=rainbow";
var query = "&q=earth";
// var query = "&q=environment";
// var query = "&q=meow";
// var query = "&q=disney+frog";
// var query = "&q=music";
// var query = "&q=donald+duck";
// var query = "&q=mickey+mouse";


function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}
