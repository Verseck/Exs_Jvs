let ano = parseInt(prompt("Digite um ano:"));

let bissexto = false;

if (ano % 4 === 0) {
  if (ano % 100 === 0) {
    if (ano % 400 === 0) {
      bissexto = true;
    }
  } else {
    bissexto = true;
  }
}

if (bissexto) {
  alert(ano + " é um ano bissexto.");
} else {
  alert(ano + " não é um ano bissexto.");
}
