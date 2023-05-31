var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

var numeros = [numero1, numero2, numero3];
numeros.sort(function(a, b) {
    return b - a;
});

var mensagem = "Números em ordem decrescente: " + numeros.join(", ");
alert(mensagem);
