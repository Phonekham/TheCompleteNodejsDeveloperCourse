// object property shorthand
const name = "phone";
const age = 24;

const user = {
  name,
  age,
  location: "Vientiane"
};
console.log(user);

// object destructuring

const product = {
  label: "Red notebook",
  price: 4,
  stock: 34,
  salePrice: undefined
};

// const { label, stock } = product;
// console.log(label);
// console.log(stock);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
