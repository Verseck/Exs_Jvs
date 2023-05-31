var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
var numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

var maiorNumero = numero1;
var menorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
} else if (numero2 < menorNumero) {
    menorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
} else if (numero3 < menorNumero) {
    menorNumero = numero3;
}

var mensagem = "Maior número: " + maiorNumero + "\nMenor número: " + menorNumero;
alert(mensagem);
