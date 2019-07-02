const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("vientiane", (error, data) => {
  if (error) {
    return console.log(error);
  } else {
    forecast(data.latitude, data.longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  }
});
