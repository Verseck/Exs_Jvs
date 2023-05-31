let data = prompt("Digite uma data no formato dd/mm/aaaa:");

let partesData = data.split("/");
let dia = parseInt(partesData[0]);
let mes = parseInt(partesData[1]);
let ano = parseInt(partesData[2]);

let dataValida = false;

// Verifica se os valores de dia, mês e ano estão dentro dos intervalos válidos
if (ano >= 1 && ano <= 9999 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
  // Verifica se o dia é válido para o mês informado
  let ultimoDiaMes = new Date(ano, mes, 0).getDate();
  if (dia <= ultimoDiaMes) {
    dataValida = true;
  }
}

if (dataValida) {
  alert(data + " é uma data válida.");
} else {
  alert(data + " não é uma data válida.");
}
