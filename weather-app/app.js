const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("vientiane", (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  } else {
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  }
});
