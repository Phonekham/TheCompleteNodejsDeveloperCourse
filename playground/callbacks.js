setTimeout(() => {
  console.log("2 secs are up");
}, 2000);

const names = ["phone", "kh", "kk"];
const shortNames = names.filter(name => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longtitude: 0
    };
    callback(data);
  }, 2000);
};

const data = geocode("vientiane", data => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum);
});
