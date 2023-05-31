
var turno = prompt("Em qual turno você estuda?\nDigite M para Matutino, V para Vespertino ou N para Noturno:");

if (turno === "M" || turno === "m") {
    alert("Bom Dia!");
} else if (turno === "V" || turno === "v") {
    alert("Boa Tarde!");
} else if (turno === "N" || turno === "n") {
    alert("Boa Noite!");
} else {
    alert("Valor Inválido!");
}
