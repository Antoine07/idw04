function ttc(price, tva = 0.2) {
  price = parseFloat(price);
  tva = parseFloat(tva);

  if (isNaN(price) || isNaN(tva)) {
    return "ERROR";
  }

  // return (price * tva + price) ; // price ( tva + 1 )

  // Math.round
  return Math.round(price * (tva + 1) * 100) / 100;
}

console.log(ttc(100));
console.log(ttc(100, 0.1));

console.log(ttc("50.5"));
console.log(ttc("50.5", "bonjour"));
console.log(ttc("Bonjour"));
