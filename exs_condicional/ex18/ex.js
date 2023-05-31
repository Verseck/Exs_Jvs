let litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
let tipoCombustivel = prompt("Digite o tipo de combustível (A-álcool, G-gasolina):");

let precoGasolina = 2.50;
let precoAlcool = 1.90;
let valorTotal;

if (tipoCombustivel.toLowerCase() === "a") {
  if (litros <= 20) {
    valorTotal = litros * precoAlcool * (1 - 0.03);
  } else {
    valorTotal = litros * precoAlcool * (1 - 0.05);
  }
} else if (tipoCombustivel.toLowerCase() === "g") {
  if (litros <= 20) {
    valorTotal = litros * precoGasolina * (1 - 0.04);
  } else {
    valorTotal = litros * precoGasolina * (1 - 0.06);
  }
} else {
  alert("Tipo de combustível inválido.");
}

alert("Valor a ser pago: R$" + valorTotal.toFixed(2));
