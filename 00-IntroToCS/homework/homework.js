"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let numFinal = num.split("").reverse().join("");
  let suma = 0;
for (let i = 0; i < numFinal.length; i++) {
  let operacion = Math.pow(2, i) * numFinal[i];
  suma += operacion;
}
return suma; 
}

function DecimalABinario(num) {
  // tu codigo aca
  var aux = []
  while (num > 0) {
    aux.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return aux.join("")
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
