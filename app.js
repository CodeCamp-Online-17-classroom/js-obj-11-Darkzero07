const prompt = require("prompt-sync")();

let name = prompt("Enter product name : ");
let quantity = parseInt(prompt("Enter quantity  : "));
let pricePerUnit = parseFloat(prompt("Enter pricePerUnit : "));
let discount = parseFloat(prompt("Enter discount : "));

function creatProduct(name, quantity, pricePerUnit, discount) {
  let product = {
    name: name,
    quantity: quantity,
    pricePerUnit: pricePerUnit,
  };
  if (discount > 0) {
    product.discount = discount;
  }
  return product;
}

function totalPrice(product) {
  let price = product.pricePerUnit * product.quantity;
  if (product.discount) {
    price = price * (1 - product.discount / 100);
  }
  return price;
}

let product = creatProduct(name, quantity, pricePerUnit, discount);
console.log(product);

let amountPrice = totalPrice(product);
console.log(amountPrice);
