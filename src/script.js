var form = document.getElementById("formFicha")
var p = document.getElementById("ficha")

function criarFicha(event) {
    p.textContent = `Raça: ${event.target[0].value}`;

    const idxClasse = event.target[1].selectedIndex;
    const classe = `Classe: ${event.target[1][idxClasse].value}`;
    p.textContent = p.textContent.concat("\n", classe);

    event.preventDefault();
}

form.addEventListener("submit", criarFicha);

console.log(form)