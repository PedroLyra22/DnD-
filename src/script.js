var form = document.getElementById("formFicha");
var divFicha = document.getElementById("ficha");
var custoAtr = document.getElementById("custoAtr");

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
  custoAtr.textContent = `${somaCustosAtribustos(
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
  const camposPericia = document.getElementsByClassName("campoPericia");
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
    objPericia[camposPericia[i].id] = {};
    objPericia[camposPericia[i].id].proficiente = camposPericia[i].checked;
  }

  const personagem = new Personagem(objPersonagem, objAtributo, objPericia);

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

  //---------------------------ATRIBUTOS--------------------------------------------------------------------

  function CriaCaixaAtr(atributo) {
    const Caixa = document.createElement("div");
    const Titulo = document.createElement("h4");
    const Modificador = document.createElement("h2");
    const Qtd = document.createElement("p");

    Caixa.id = `caixa${atributo.toUpperCase()}`;
    Titulo.id = `tit${atributo.toUpperCase()}`;
    Modificador.id = `mod${atributo.toUpperCase()}`;
    Qtd.id = `qtd${atributo.toUpperCase()}`;

    Titulo.textContent = atributo.slice(0, 3).toUpperCase();
    Modificador.textContent = personagem.atributos[atributo].modificador;
    Qtd.textContent = personagem.atributos[atributo].valor;

    Caixa.appendChild(Titulo);
    Caixa.appendChild(Modificador);
    Caixa.appendChild(Qtd);
    divFicha.appendChild(Caixa);
  }

  CriaCaixaAtr("força");
  CriaCaixaAtr("destreza");
  CriaCaixaAtr("constituição");
  CriaCaixaAtr("inteligência");
  CriaCaixaAtr("sabedoria");
  CriaCaixaAtr("carisma");

  //----------------------------PERÍCIAS---------------------------------------------------------------------
  const QuadroPericias = document.createElement("ul"); //TO DO: Retirar a bolinha no CSS
  for (pericia in personagem.pericias) {
    const LiQuadroP = document.createElement("li");
    const LabelQuadroP = document.createElement("label");
    const InputQuadroP = document.createElement("input");

    LabelQuadroP.textContent = `${pericia} = ${personagem.pericias[pericia].valor} (${personagem.pericias[pericia].atributo})`; //TO DO: Colocar em maiúsculo no CSS
    InputQuadroP.type = "checkbox";
    InputQuadroP.checked = personagem.pericias[pericia].proficiente;
    InputQuadroP.disabled = true;

    LiQuadroP.appendChild(InputQuadroP);
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

  //------------------------------INICIATIVA-------------------------------------------------------------------------
  const CaixaIniciativa = document.createElement("div");
  const ValorIniciativa = document.createElement("h3");
  const TituloIniciativa = document.createElement("h5");

  ValorIniciativa.textContent = personagem.iniciativa.valor;
  TituloIniciativa.textContent = "INICIATIVA";

  CaixaIniciativa.appendChild(TituloIniciativa);
  CaixaIniciativa.appendChild(ValorIniciativa);
  divFicha.appendChild(CaixaIniciativa);

  //------------------------------SALVAGUARDAS-------------------------------------------------------------------
  const QuadroSalvaguardas = document.createElement("ul");
  const TituloSalvaguarda = document.createElement("h5");
  for (salvaguarda in personagem.salvaguardas) {
    const LiQuadroS = document.createElement("li");
    const LabelQuadroS = document.createElement("label");
    const InputQuadroS = document.createElement("input");

    LabelQuadroS.textContent = `${salvaguarda.slice(0, 3).toUpperCase()} = ${
      personagem.salvaguardas[salvaguarda].valor
    }`; //TO DO: Colocar em maiúsculo no CSS
    InputQuadroS.type = "checkbox";
    InputQuadroS.checked = personagem.salvaguardas[salvaguarda].proficiente;
    InputQuadroS.disabled = true;
    TituloSalvaguarda.textContent = "SALVAGUARDAS";

    LiQuadroS.appendChild(InputQuadroS);
    LiQuadroS.appendChild(LabelQuadroS);
    QuadroSalvaguardas.appendChild(LiQuadroS);
  }
  divFicha.appendChild(TituloSalvaguarda);
  divFicha.appendChild(QuadroSalvaguardas);
  
  //-------------------------------DADOS DE VIDA-----------------------------------------------------
  const inputDadosVida = document.getElementsByClassName("dadosVida");
  let dadoSoma = 0;
  for(let i = 0; i < inputDadosVida.length; i++){
    dadoSoma += Number(inputDadosVida[i].value);
  }
  personagem.mapeiaVida(dadoSoma, escolhaV.checked);

  const CaixaVida = document.createElement("div");
  CaixaVida.innerHTML = `<h5>VIDA</h5>
                         <h3>${personagem.vida}</h3>`;
  
  divFicha.appendChild(CaixaVida);

//--------------------------------DADO DE DESCANSO------------------------------------------------------------------------------------
const CaixaDadoDescanso = document.createElement("div");
CaixaDadoDescanso.innerHTML = `<h6>DADO DE VIDA</h6>
                               <h7>${personagem.nivel} x d${personagem.dados.descanso.valor}</h7>`;

divFicha.appendChild(CaixaDadoDescanso);

//--------------------------------PROFICIÊNCIAS------------------------------------------------------
function arrayParaString(arr){
  if (arr.length > 0){
    let ArrayTemp = arr.slice();
    let StringTemp = ArrayTemp[0];
    ArrayTemp.shift();
    ArrayTemp.forEach(elemento => { 
      StringTemp = StringTemp.concat(', ', elemento);
    });
    return StringTemp;
  }
    return " -";
}

const CaixaProficiencias = document.createElement("div");
CaixaProficiencias.innerHTML = `<h5>PROFICIÊNCIAS:</h5>
                                <h6>Armas:${arrayParaString(personagem.armas)}</h6>
                                <h6><b>Armaduras:${arrayParaString(personagem.armaduras)}</h6>
                                <h6>Ferramentas:${arrayParaString(personagem.ferramentas)}</h6>
                                <h6>Idiomas:${arrayParaString(personagem.armas)}</h6>`

divFicha.appendChild(CaixaProficiencias);





//-------------------------------------------------------------------------------------------------

  console.log(personagem);
}

//-----------------Controle das perícias-------------------------------------------------------

const conjuntoElementosPericia = document.getElementsByClassName("campoPericia");

function desabilitaPericias(){
  for (pericia of conjuntoElementosPericia) {
    pericia.disabled = true;
  }
}

function habilitaPericias(){
  desabilitaPericias();

  const opcaoEscolhida = document.getElementById("chaClass").value;
  const opcoesDePericia = mapClass.get(opcaoEscolhida).proficiencias;

  for (pericia of opcoesDePericia) {
    const elementoPericia = document.getElementById(pericia);
    elementoPericia.disabled = false;
  }
}

//Perícias habilitadas pela classe
const SelecaoClasse = document.getElementById("chaClass");
SelecaoClasse.addEventListener("change", (event) => {
  habilitaPericias();
})

//Contador de proficiência
for (pericia of conjuntoElementosPericia){
  pericia.addEventListener("change", (event) => {
    let qtdMarcados = 0;
    for (pericia of conjuntoElementosPericia) {
      //console.log(pericia);
      if (pericia.checked === true){
        qtdMarcados++;
      }
      if(qtdMarcados === 2){
        desabilitaPericias();
      }else{
        habilitaPericias();
      }
    }
    for (pericia of conjuntoElementosPericia){
      if(pericia.checked){
        pericia.disabled = false;
      }
    }
    
    const ContadorProficiencia = document.getElementById("custoPericias");
    ContadorProficiencia.textContent = `${qtdMarcados}/2`;
  }) 
}









const escolhaV = document.getElementById("roll");
const BotaoRolar = document.getElementById("botão de rolagem");

BotaoRolar.onclick = () => {
  document.getElementById("formSubmit").disabled = false;
  BotaoRolar.clicked = true;
  
  const temp = document.getElementById("caixaVida");
  if (temp){
    temp.remove();
  }
  const CaixaRolaDadosVida = document.createElement("fieldset");
  CaixaRolaDadosVida.id = "caixaVida";
  const classe = document.getElementById("chaClass").value;

  let resultado = 0;
  do{
    resultado = rolaDados(mapClass.get(classe).hitDice, document.getElementById("nvl").value - 1);
  } while(resultado.includes(1));

  let nvl = 2;
  for (dado of resultado) {
    const DadoInput = document.createElement("input");
    const LabelVida = document.createElement("label");

    DadoInput.value = dado; 
    DadoInput.disabled = true;
    DadoInput.classList.add("dadosVida");
    LabelVida.textContent = ` Nível ${nvl}: `;

    LabelVida.appendChild(DadoInput);
    CaixaRolaDadosVida.appendChild(LabelVida);
    nvl++
  }
  form.appendChild(CaixaRolaDadosVida);
};

const OpcaoRolarVida = document.getElementById("roll");
const OpcaoMediaVida = document.getElementById("average");

OpcaoRolarVida.onclick = () => {
  if(BotaoRolar.clicked != true){
    document.getElementById("formSubmit").disabled = true;
  }
}

OpcaoMediaVida.onclick = () => {
  document.getElementById("formSubmit").disabled = false;
}



const atributos = document.getElementsByClassName("campoAtributo");
for (let i = 0; i < atributos.length; i++) {
  atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);
