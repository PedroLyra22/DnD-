var form = document.getElementById("formFicha")
var divFicha = document.getElementById("ficha")

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
            const oldXp = Math.floor((Number(campo.value) + 100) / 100);
            const newXP = Math.floor((3.7825*Math.pow(xp,4)) - (134.59*Math.pow(xp,3)) + (2572.6*Math.pow(xp,2)) - (10699*xp + 10703));
            Nivel.textContent = `Nível: ${newXP}`;

            divFicha.appendChild(Experiencia);
            divFicha.appendChild(Nivel);
        }
        



    }


    //console.log(campos)
}

form.addEventListener("submit", criarFicha);

