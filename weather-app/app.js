const request = require("request");
const geocode = require("./utils/geocode");
// const url =
//   "https://api.darksky.net/forecast/fff5ea8f7368603dcf67a1e542d9d438/37.8267,-122.4233";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service");
//   } else {
//     console.log(
//       response.body.daily.data[0].summary +
//         "It is currently " +
//         response.body.currently.temperature +
//         " degree out. there is a " +
//         response.body.currently.precipProbability +
//         " % of rain"
//     );
//   }
// });

// Geocoding
// Adress -> lat/long -> weather
// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGhvbmVraGFtIiwiYSI6ImNqeGlwZDNsdTBxamIzeG10OGg0YnRtZ3oifQ.6IMNjVL6bLc-AGGbNse2VA";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service");
//   } else if (response.body.features.length === 0) {
//     console.log("unable to find location. try another search");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

geocode("new york ", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
