let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));

let discriminante = b * b - 4 * a * c;
let raiz1, raiz2;

if (discriminante > 0) {
  raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  alert("As raízes são reais e diferentes.\nRaiz 1: " + raiz1.toFixed(2) + "\nRaiz 2: " + raiz2.toFixed(2));
} else if (discriminante === 0) {
  raiz1 = -b / (2 * a);
  alert("As raízes são reais e iguais.\nRaiz única: " + raiz1.toFixed(2));
} else {
  alert("As raízes são complexas e não há solução real para a equação.");
}
