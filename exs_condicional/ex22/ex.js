let lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

let mensagem = "";

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado1 === lado3) {
    mensagem = "Triângulo Equilátero: três lados iguais";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    mensagem = "Triângulo Isósceles: quaisquer dois lados iguais";
  } else {
    mensagem = "Triângulo Escaleno: três lados diferentes";
  }
} else {
  mensagem = "Os valores informados não podem formar um triângulo";
}

alert(mensagem);
