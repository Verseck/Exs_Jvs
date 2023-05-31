var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
var numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

var maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}


alert("O maior número é: " + maiorNumero);
