let letra = prompt("Digite a letra: ").toLowerCase();

if (letra.length !== 1) {
    alert("Digite apenas uma letra.");
} else if (letra === "a" || letra === "e" || letra === "i" ||  letra === "o" || letra === "u") {
        alert("A letra digitada é uma vogal.");
} else {
    alert("A letra digitada é uma consoante.");
}