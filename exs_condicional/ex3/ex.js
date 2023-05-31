let resposta1 = prompt("Telefonou para a vítima? (responda 'sim' ou 'não')");
let resposta2 = prompt("Esteve no local do crime? (responda 'sim' ou 'não')");
let resposta3 = prompt("Mora perto da vítima? (responda 'sim' ou 'não')");
let resposta4 = prompt("Devia para a vítima? (responda 'sim' ou 'não')");
let resposta5 = prompt("Já trabalhou com a vítima? (responda 'sim' ou 'não')");

let contador = 0;

if (resposta1.toLowerCase() === "sim") {
  contador++;
}

if (resposta2.toLowerCase() === "sim") {
  contador++;
}

if (resposta3.toLowerCase() === "sim") {
  contador++;
}

if (resposta4.toLowerCase() === "sim") {
  contador++;
}

if (resposta5.toLowerCase() === "sim") {
  contador++;
}

let classificacao;

if (contador === 5) {
  classificacao = "Assassino";
} else if (contador >= 3 && contador <= 4) {
  classificacao = "Cúmplice";
} else if (contador === 2) {
  classificacao = "Suspeita";
} else {
  classificacao = "Inocente";
}

alert("Classificação: " + classificacao);
