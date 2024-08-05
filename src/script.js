var form = document.getElementById("formFicha");
var divFicha = document.getElementById("ficha");
var custo = document.getElementById("custo");

const testando = true;
if (testando) {
  form.chaName.value = "Valente";
  form.playName.value = "Pedro";
  form.race.value = "Tabaxi";
  form.chaClass.value = "Ladino";
  form.background.value = "Criminoso";
  form.allingment.value = "Caótico e Bom";
  form.nvl.value = "3";
}

function imprimeCustoAtributo() {
  const VatrF = document.getElementById("força").value;
  const VatrD = document.getElementById("destreza").value;
  const VatrCo = document.getElementById("constituição").value;
  const VatrI = document.getElementById("inteligência").value;
  const VatrS = document.getElementById("sabedoria").value;
  const VatrCa = document.getElementById("carisma").value;
  custo.textContent = `${somaCustosAtribustos(
    VatrF,
    VatrD,
    VatrCo,
    VatrI,
    VatrS,
    VatrCa
  )} / 27`;
}

imprimeCustoAtributo();

function criarFicha(event) {
  event.preventDefault();
  const campos = event.target;
  const camposPersonagem = document.getElementsByClassName("campoPersonagem");
  const camposAtributo = document.getElementsByClassName("campoAtributo");
  const camposPericia = document.getElementsByClassName("campoPericia")
  const objPersonagem = {};
  const objAtributo = {};
  const objPericia = {};

  for (let i = 0; i < camposPersonagem.length; i++) {
    objPersonagem[camposPersonagem[i].id] = camposPersonagem[i].value;
  }

  for (let i = 0; i < camposAtributo.length; i++) {
    objAtributo[camposAtributo[i].id] = camposAtributo[i].value;
  }

  for (let i = 0; i < camposPericia.length; i++) {
    objPericia[camposPericia[i].id] = {}
    objPericia[camposPericia[i].id].proficiente = camposPericia[i].checked;
  }
  
  const personagem = new Personagem(objPersonagem, objAtributo, objPericia);
  console.log(personagem)
  
  const NomePersonagem = document.createElement("h1");
  NomePersonagem.textContent = `Nome do Personagem: ${personagem.nome}`;
  divFicha.appendChild(NomePersonagem);

  const NomeJogador = document.createElement("h3");
  NomeJogador.textContent = `Nome do Jogador: ${personagem.jogador}`;
  divFicha.appendChild(NomeJogador);

  const Raca = document.createElement("h3");
  Raca.textContent = `Linhagem: ${personagem.raça}`;
  divFicha.appendChild(Raca);

  const Classe = document.createElement("h3");
  Classe.textContent = `Classe: ${personagem.classe}`;
  divFicha.appendChild(Classe);

  const Antecedente = document.createElement("h3");
  Antecedente.textContent = `Antecedente: ${personagem.antecedente}`;
  divFicha.appendChild(Antecedente);

  const Alinhamento = document.createElement("h3");
  Alinhamento.textContent = `Alinhamento: ${personagem.alinhamento}`;
  divFicha.appendChild(Alinhamento);

  const Nivel = document.createElement("h3");
  Nivel.textContent = `Nível: ${personagem.nivel}`;
  divFicha.appendChild(Nivel);

  //---------------------------ATRIBUTOS-------------------------------------

  function CriaCaixaAtr(atributo){
    const Caixa = document.createElement("div");
    const Titulo = document.createElement("h4");
    const Modificador = document.createElement("h2");
    const Qtd = document.createElement("p");

    Caixa.id = `caixa${atributo.toUpperCase()}`;
    Titulo.id = `tit${atributo.toUpperCase()}`;
    Modificador.id = `mod${atributo.toUpperCase()}`;
    Qtd.id = `qtd${atributo.toUpperCase()}`;

    Titulo.textContent = atributo.slice(0,3).toUpperCase();
    Modificador.textContent = personagem.atributos[atributo].modificador;
    Qtd.textContent = personagem.atributos[atributo].valor;

    Caixa.appendChild(Titulo);
    Caixa.appendChild(Modificador);
    Caixa.appendChild(Qtd);
    divFicha.appendChild(Caixa);
  }

  CriaCaixaAtr("força")
  CriaCaixaAtr("destreza")
  CriaCaixaAtr("constituição")
  CriaCaixaAtr("inteligência")
  CriaCaixaAtr("sabedoria")
  CriaCaixaAtr("carisma")


//---------------------------BÔNUS DE PROFICIÊNCIA---------------------------------------------------------
  const bonusProficiencia = document.createElement("h3")
  bonusProficiencia.id = "bp"
  bonusProficiencia.textContent = `Bônus de Proficiência: ${personagem.bonusProficiencia}`;
  divFicha.appendChild(bonusProficiencia);
  
}

//----------------------------PERÍCIAS--------------------------

  const pericias = document.getElementById("listaPerícias")
  console.log(pericias)





const atributos = document.getElementsByClassName("campoAtributo");
for (let i = 0; i < atributos.length; i++) {
  atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);
