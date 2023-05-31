let numero = parseInt(prompt("Digite um número inteiro menor que 1000:"));

let centenas = Math.floor(numero / 100);
let dezenas = Math.floor((numero % 100) / 10);
let unidades = numero % 10;

let resultado = "";

if (centenas > 0) {
  resultado += centenas + (centenas === 1 ? " centena" : " centenas");
  if (dezenas > 0 || unidades > 0) {
    resultado += ", ";
  }
}

if (dezenas > 0) {
  resultado += dezenas + (dezenas === 1 ? " dezena" : " dezenas");
  if (unidades > 0) {
    resultado += " e ";
  }
}

if (unidades > 0 || (numero === 0 && resultado === "")) {
  resultado += unidades + (unidades === 1 ? " unidade" : " unidades");
}

alert(resultado);
