let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha uma operação: soma (+), subtração (-), multiplicação (*) ou divisão (/)");

let resultado;

if (operacao === "+") {
  resultado = numero1 + numero2;
} else if (operacao === "-") {
  resultado = numero1 - numero2;
} else if (operacao === "*") {
  resultado = numero1 * numero2;
} else if (operacao === "/") {
  resultado = numero1 / numero2;
}

let informacoes = "Resultado: " + resultado + "\n";

if (resultado % 2 === 0) {
  informacoes += "O número é par.\n";
} else {
  informacoes += "O número é ímpar.\n";
}

if (resultado >= 0) {
  informacoes += "O número é positivo.\n";
} else {
  informacoes += "O número é negativo.\n";
}

if (Number.isInteger(resultado)) {
  informacoes += "O número é inteiro.";
} else {
  informacoes += "O número é decimal.";
}

alert(informacoes);
