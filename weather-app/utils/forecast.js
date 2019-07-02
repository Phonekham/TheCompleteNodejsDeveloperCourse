const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/fff5ea8f7368603dcf67a1e542d9d438/" +
    latitude +
    "," +
    longtitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          "It is currently " +
          response.body.currently.temperature +
          " degree out. there is a " +
          response.body.currently.precipProbability +
          " % of rain"
      );
    }
  });
};

module.exports = forecast;
