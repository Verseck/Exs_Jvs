let valorSaque = parseInt(prompt("Digite o valor que deseja sacar (entre 10 e 600 reais):"));

if (valorSaque < 10 || valorSaque > 600) {
  alert("Valor inválido. O saque deve ser entre 10 e 600 reais.");
} else {
  let notasDisponiveis = [100, 50, 10, 5, 1];
  let notasEntregues = [];
  
  for (let i = 0; i < notasDisponiveis.length; i++) {
    let quantidadeNotas = Math.floor(valorSaque / notasDisponiveis[i]);
    notasEntregues.push(quantidadeNotas);
    valorSaque -= quantidadeNotas * notasDisponiveis[i];
  }
  
  let mensagem = "Notas entregues:\n";
  for (let i = 0; i < notasDisponiveis.length; i++) {
    if (notasEntregues[i] > 0) {
      mensagem += notasEntregues[i] + " nota(s) de " + notasDisponiveis[i] + " reais\n";
    }
  }
  
  alert(mensagem);
}
