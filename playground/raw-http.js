const https = require("https");
const url =
  "https://api.darksky.net/forecast/fff5ea8f7368603dcf67a1e542d9d438/40,-75";

const request = https.request(url, response => {
  let data = "";

  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log("An error", error);
});

request.end();
