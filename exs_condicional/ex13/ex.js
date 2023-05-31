let nota1 = parseFloat(prompt("Digite a primeira nota parcial:"));
let nota2 = parseFloat(prompt("Digite a segunda nota parcial:"));

let media = (nota1 + nota2) / 2;
let conceito;
let mensagem;

if (media >= 9.0 && media <= 10.0) {
  conceito = "A";
} else if (media >= 7.5 && media < 9.0) {
  conceito = "B";
} else if (media >= 6.0 && media < 7.5) {
  conceito = "C";
} else if (media >= 4.0 && media < 6.0) {
  conceito = "D";
} else {
  conceito = "E";
}

if (conceito === "A" || conceito === "B" || conceito === "C") {
  mensagem = "APROVADO";
} else {
  mensagem = "REPROVADO";
}

alert("Notas: " + nota1 + ", " + nota2 + "\nMédia: " + media.toFixed(1) + "\nConceito: " + conceito + "\n" + mensagem);
