
var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

var mensagemAntesDaTroca = "Valores antes da troca:\nNúmero 1: " + numero1 + "\nNúmero 2: " + numero2;
alert(mensagemAntesDaTroca);

var temp = numero1;
numero1 = numero2;
numero2 = temp;

var mensagemDepoisDaTroca = "Valores depois da troca:\nNúmero 1: " + numero1 + "\nNúmero 2: " + numero2;
alert(mensagemDepoisDaTroca);
