var form = document.getElementById("formFicha");
var divFicha = document.getElementById("ficha");
var custo = document.getElementById("custo");

const testando = true;
if (testando) {
  form.chaName.value = "Valente";
  form.playName.value = "Pedro";
  form.race.value = "Tabaxi";
  form.chaClass.value = "Artífice";
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

//-----------------------------CABEÇALHO------------------------------------------------------------------------
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

//---------------------------BÔNUS DE PROFICIÊNCIA---------------------------------------------------------
    const BonusProficiencia = document.createElement("h3");
    BonusProficiencia.id = "bp";
    BonusProficiencia.textContent = `Bônus de Proficiência: ${personagem.bonusProficiencia}`;
    divFicha.appendChild(BonusProficiencia);
  
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
  
//----------------------------PERÍCIAS---------------------------------------------------------------------
  const QuadroPericias = document.createElement("ul") //TO DO: Retirar a bolinha no CSS
  for (pericia in personagem.pericias){
    const LiQuadroP = document.createElement("li");
    const LabelQuadroP = document.createElement("label");
    const InputQuadroP = document.createElement("input");
    
    LabelQuadroP.textContent = `${pericia} = ${personagem.pericias[pericia].valor} (${personagem.pericias[pericia].atributo})`; //TO DO: Colocar em maiúsculo no CSS
    InputQuadroP.type = "checkbox";
    InputQuadroP.checked = personagem.pericias[pericia].proficiente;
    InputQuadroP.disabled = true;

    LiQuadroP.appendChild(InputQuadroP)
    LiQuadroP.appendChild(LabelQuadroP);
    QuadroPericias.appendChild(LiQuadroP);
  } 
  divFicha.appendChild(QuadroPericias);

//---------------------------PERCEPÇÂO / INTUIÇÃO PASSIVA----------------------------------------------------------------
  const PercepçaoP = document.createElement("h5");
  PercepçaoP.textContent = `Percepção Passiva: ${personagem.percepçãoPassiva.valor}`;

  const IntuiçaoP = document.createElement("h5");
  IntuiçaoP.textContent = `Intuição Passiva: ${personagem.intuiçãoPassiva.valor}`;

  divFicha.appendChild(PercepçaoP);
  divFicha.appendChild(IntuiçaoP);

//-----------------------------INICIATIVA-------------------------------------------------------------------------
  const CaixaIniciativa = document.createElement("div");
  const ValorIniciativa = document.createElement("h3");
  const TituloIniciativa = document.createElement("h5");

  ValorIniciativa.textContent = personagem.iniciativa.valor;
  TituloIniciativa.textContent = "INICIATIVA"

  CaixaIniciativa.appendChild(TituloIniciativa);
  CaixaIniciativa.appendChild(ValorIniciativa);
  divFicha.appendChild(CaixaIniciativa);

//-------------------------------------------------------------------------------




}



const atributos = document.getElementsByClassName("campoAtributo");
for (let i = 0; i < atributos.length; i++) {
  atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);
