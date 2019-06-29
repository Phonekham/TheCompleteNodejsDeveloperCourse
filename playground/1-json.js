const fs = require("fs");
// const book = {
//   title: "Book1",
//   author: "Phonekham"
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.title);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON);
console.log(data.title);
