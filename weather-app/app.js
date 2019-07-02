const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// geocode("new york ", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

forecast(-75.7088, 44.1545999999999, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
