const request = require("request");

const url =
  "https://api.darksky.net/forecast/fff5ea8f7368603dcf67a1e542d9d438/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
