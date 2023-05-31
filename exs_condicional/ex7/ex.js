// Leitura do valor da hora e quantidade de horas trabalhadas
var valorHora = parseFloat(prompt("Digite o valor da sua hora de trabalho:"));
var horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));

// Cálculo do salário bruto
var salarioBruto = valorHora * horasTrabalhadas;

// Definição do percentual de desconto do Imposto de Renda
var percentualIR;

if (salarioBruto <= 900) {
    percentualIR = 0;
} else if (salarioBruto <= 1500) {
    percentualIR = 5;
} else if (salarioBruto <= 2500) {
    percentualIR = 10;
} else {
    percentualIR = 20;
}

// Cálculo dos descontos
var descontoIR = salarioBruto * (percentualIR / 100);
var descontoINSS = salarioBruto * 0.1; // 10% de desconto para o INSS
var descontoSindicato = salarioBruto * 0.03; // 3% de desconto para o Sindicato
var totalDescontos = descontoIR + descontoINSS + descontoSindicato;
var fgts = salarioBruto * 0.11; // 11% de FGTS

// Cálculo do salário líquido
var salarioLiquido = salarioBruto - totalDescontos;

// Exibição das informações
alert("Salário Bruto: R$ " + salarioBruto.toFixed(2) +
      "\n(-) IR (" + percentualIR + "%): R$ " + descontoIR.toFixed(2) +
      "\n(-) INSS (10%): R$ " + descontoINSS.toFixed(2) +
      "\n(-) Sindicato (3%): R$ " + descontoSindicato.toFixed(2) +
      "\nFGTS (11%): R$ " + fgts.toFixed(2) +
      "\nTotal de descontos: R$ " + totalDescontos.toFixed(2) +
      "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));

