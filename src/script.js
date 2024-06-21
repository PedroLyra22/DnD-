var form = document.getElementById("formFicha")
var divFicha = document.getElementById("ficha")
var custo = document.getElementById("custo")

function imprimeCustoAtributo(){
    const VatrF = document.getElementById("força").value
    const VatrD = document.getElementById("destreza").value
    const VatrCo = document.getElementById("constituição").value
    const VatrI = document.getElementById("inteligência").value
    const VatrS = document.getElementById("sabedoria").value
    const VatrCa = document.getElementById("carisma").value
    custo.textContent = `${somaCustosAtribustos(VatrF, VatrD, VatrCo, 
        VatrI, VatrS, VatrCa)} / 27`
}

imprimeCustoAtributo();

function criarFicha(event) {
    event.preventDefault();
    const campos = event.target;

    for(campo of campos){

        if(campo.id === "chaName"){           
            const NomePersonagem = document.createElement('h1');
            NomePersonagem.textContent = `Nome do Personagem: ${campo.value}`;
            divFicha.appendChild(NomePersonagem);
        }

        if(campo.id === "playName"){           
            const NomeJogador = document.createElement('h3');
            NomeJogador.textContent = `Nome do Jogador: ${campo.value}`;
            divFicha.appendChild(NomeJogador);
        }

        if(campo.id === "race"){           
            const Raca = document.createElement('h3');
            Raca.textContent = `Linhagem: ${campo[campo.selectedIndex].value}`;
            divFicha.appendChild(Raca);
        }

        if(campo.id === "class"){           
            const Classe = document.createElement('h3');
            Classe.textContent = `Classe: ${campo[campo.selectedIndex].value}`;
            divFicha.appendChild(Classe);
        }

        if(campo.id === "background"){           
            const Antecedente = document.createElement('h3');
            Antecedente.textContent = `Antecedente: ${campo[campo.selectedIndex].value}`;
            divFicha.appendChild(Antecedente);
        }

        if(campo.id === "allingment"){           
            const Alinhamento = document.createElement('h3');
            Alinhamento.textContent = `Alinhamento: ${campo[campo.selectedIndex].value}`;
            divFicha.appendChild(Alinhamento);
        }

        if(campo.id === "exp"){           
            const Experiencia = document.createElement('h3');
            const Nivel = document.createElement('h3')
            const xp = Number(campo.value);

            Experiencia.textContent = `Experiencia: ${campo.value}`;
            Nivel.textContent = `Nível: ${calculaNivel(xp)}`;

            divFicha.appendChild(Experiencia);
            divFicha.appendChild(Nivel);
        }

        if(campo.id === "força"){
            const CaixaFor = document.createElement('div');
            const QtdFor = document.createElement('p');
            const Modificador = document.createElement('h2');

            CaixaFor.id = "caixaFor";
            QtdFor.id = "qtdFor";
            Modificador.id = "modFor";

            QtdFor.textContent = campo.valueAsNumber;
            Modificador.textContent = calculaModificador(campo.valueAsNumber);

            CaixaFor.appendChild(QtdFor);
            CaixaFor.appendChild(Modificador);
            divFicha.appendChild(CaixaFor);

            //TO DO: Terminar de imprimir os atributos do formulario

        }
    }


    console.log(campos)
}


const atributos = document.getElementsByClassName("atr");
for(let i=0; i < atributos.length; i++){
    atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);


