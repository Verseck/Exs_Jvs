var salario = parseFloat(prompt("Digite o salário do colaborador:"));

var novoSalario;
var percentual;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

var aumento = salario * (percentual / 100);
novoSalario = salario + aumento;

var mensagem = "Salário antes do reajuste: R$ " + salario.toFixed(2) +
    "\nPercentual de aumento: " + percentual + "%" +
    "\nValor do aumento: R$ " + aumento.toFixed(2) +
    "\nNovo salário: R$ " + novoSalario.toFixed(2);

alert(mensagem);
