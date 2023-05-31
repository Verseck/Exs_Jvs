let tipoCarne = prompt("Digite o tipo de carne (File Duplo, Alcatra ou Picanha):");
let quantidade = parseFloat(prompt("Digite a quantidade de carne em Kg:"));
let pagamento = prompt("Digite o tipo de pagamento (Cartão Tabajara ou Outro):");

let precoKg;

switch (tipoCarne.toLowerCase()) {
  case "file duplo":
    precoKg = quantidade <= 5 ? 4.90 : 5.80;
    break;
  case "alcatra":
    precoKg = quantidade <= 5 ? 5.90 : 6.80;
    break;
  case "picanha":
    precoKg = quantidade <= 5 ? 6.90 : 7.80;
    break;
  default:
    alert("Tipo de carne inválido.");
    break;
}

let precoTotal = precoKg * quantidade;
let desconto = 0;
let valorFinal = precoTotal;

if (pagamento.toLowerCase() === "cartão tabajara") {
  desconto = precoTotal * 0.05;
  valorFinal = precoTotal - desconto;
}

alert("Cupom Fiscal:\n" +
  "Tipo de carne: " + tipoCarne + "\n" +
  "Quantidade: " + quantidade + " Kg\n" +
  "Preço total: R$" + precoTotal.toFixed(2) + "\n" +
  "Tipo de pagamento: " + pagamento + "\n" +
  "Valor do desconto: R$" + desconto.toFixed(2) + "\n" +
  "Valor a pagar: R$" + valorFinal.toFixed(2));
