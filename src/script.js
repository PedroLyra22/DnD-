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
  const camposAtributo = document.getElementsByClassName("atr");
  const objPersonagem = {};
  const objAtributo = {};

  for (let i = 0; i < camposPersonagem.length; i++) {
    objPersonagem[camposPersonagem[i].id] = camposPersonagem[i].value;
  }

  for (let i = 0; i < camposAtributo.length; i++) {
    objAtributo[camposAtributo[i].id] = camposAtributo[i].value;
  }

  const personagem = new Personagem(objPersonagem, objAtributo);

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

  const CaixaFor = document.createElement("div");
  const QtdFor = document.createElement("p");
  const ModificadorF = document.createElement("h2");
  const TituloF = document.createElement("h4");

  CaixaFor.id = "caixaFor";
  QtdFor.id = "qtdFor";
  ModificadorF.id = "modFor";
  TituloF.id = "titFor";

  QtdFor.textContent = personagem.atributos.força.valor;
  ModificadorF.textContent = personagem.atributos.força.modificador;
  TituloF.textContent = "FOR";

  CaixaFor.appendChild(QtdFor);
  CaixaFor.appendChild(ModificadorF);
  CaixaFor.appendChild(TituloF);
  divFicha.appendChild(CaixaFor);

  const CaixaDex = document.createElement("div");
  const QtdDex = document.createElement("p");
  const ModificadorD = document.createElement("h2");
  const TituloD = document.createElement("h4");

  CaixaDex.id = "caixaDex";
  QtdDex.id = "qtdDex";
  ModificadorD.id = "modDex";
  TituloD.id = "titDex";

  QtdDex.textContent = personagem.atributos.destreza.valor;
  ModificadorD.textContent = personagem.atributos.destreza.modificador;
  TituloD.textContent = "DEX";

  CaixaDex.appendChild(QtdDex);
  CaixaDex.appendChild(ModificadorD);
  CaixaDex.appendChild(TituloD);
  divFicha.appendChild(CaixaDex);

  const CaixaCon = document.createElement("div");
  const QtdCon = document.createElement("p");
  const ModificadorCo = document.createElement("h2");
  const TituloCo = document.createElement("h4");

  CaixaCon.id = "caixaCon";
  QtdCon.id = "qtdCon";
  ModificadorCo.id = "modCon";
  TituloCo.id = "titCon";

  QtdCon.textContent = personagem.atributos.constituição.valor;
  ModificadorCo.textContent = personagem.atributos.constituição.modificador;
  TituloCo.textContent = "CON";

  CaixaCon.appendChild(QtdCon);
  CaixaCon.appendChild(ModificadorCo);
  CaixaCon.appendChild(TituloCo);
  divFicha.appendChild(CaixaCon);

  const CaixaInt = document.createElement("div");
  const QtdInt = document.createElement("p");
  const ModificadorI = document.createElement("h2");
  const TituloI = document.createElement("h4");

  CaixaInt.id = "caixaInt";
  QtdInt.id = "qtdInt";
  ModificadorI.id = "modInt";
  TituloI.id = "titInt";

  QtdInt.textContent = personagem.atributos.inteligência.valor;
  ModificadorI.textContent = personagem.atributos.inteligência.modificador;
  TituloI.textContent = "INT";

  CaixaInt.appendChild(QtdInt);
  CaixaInt.appendChild(ModificadorI);
  CaixaInt.appendChild(TituloI);
  divFicha.appendChild(CaixaInt);

  const CaixaSab = document.createElement("div");
  const QtdSab = document.createElement("p");
  const ModificadorS = document.createElement("h2");
  const TituloS = document.createElement("h4");

  CaixaSab.id = "caixaSab";
  QtdSab.id = "qtdSab";
  ModificadorS.id = "modSab";
  TituloS.id = "titSab";

  QtdSab.textContent = personagem.atributos.sabedoria.valor;
  ModificadorS.textContent = personagem.atributos.sabedoria.modificador;
  TituloS.textContent = "SAB";

  CaixaSab.appendChild(QtdSab);
  CaixaSab.appendChild(ModificadorS);
  CaixaSab.appendChild(TituloS);
  divFicha.appendChild(CaixaSab);

  const CaixaCar = document.createElement("div");
  const QtdCar = document.createElement("p");
  const ModificadorCa = document.createElement("h2");
  const TituloCa = document.createElement("h4");

  CaixaCar.id = "caixaCar";
  QtdCar.id = "qtdCar";
  ModificadorCa.id = "modCar";
  TituloCa.id = "titCar";

  QtdCar.textContent = personagem.atributos.carisma.valor;
  ModificadorCa.textContent = personagem.atributos.carisma.modificador;
  TituloCa.textContent = "CHA";

  CaixaCar.appendChild(QtdCar);
  CaixaCar.appendChild(ModificadorCa);
  CaixaCar.appendChild(TituloCa);
  divFicha.appendChild(CaixaCar);
}

const atributos = document.getElementsByClassName("atr");
for (let i = 0; i < atributos.length; i++) {
  atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);
