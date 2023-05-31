var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));

var media = (nota1 + nota2) / 2;

if (media === 10) {
    alert("Aprovado com sucesso")
} else if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}