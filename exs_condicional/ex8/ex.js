let kgMorangos = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"));
let kgMacas = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"));

let precoMorangos;
let precoMacas;
let valorTotal;

if (kgMorangos <= 5) {
  precoMorangos = kgMorangos * 2.50;
} else {
  precoMorangos = kgMorangos * 2.20;
}

if (kgMacas <= 5) {
  precoMacas = kgMacas * 1.80;
} else {
  precoMacas = kgMacas * 1.50;
}

valorTotal = precoMorangos + precoMacas;

if (kgMorangos + kgMacas > 8 || valorTotal > 25) {
  valorTotal *= 0.90; // Aplica o desconto de 10%
}

alert("Valor a ser pago: R$" + valorTotal.toFixed(2));
