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
  const objPersonagem = {};

  for (let i = 0; i < camposPersonagem.length; i++) {
    objPersonagem[camposPersonagem[i].id] = camposPersonagem[i].value;
  }

  const personagem = new Personagem(objPersonagem);

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
  for (campo of campos) {
    if (campo.id === "força") {
      const CaixaFor = document.createElement("div");
      const QtdFor = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaFor.id = "caixaFor";
      QtdFor.id = "qtdFor";
      Modificador.id = "modFor";
      Titulo.id = "titFor";

      QtdFor.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "FOR";

      CaixaFor.appendChild(QtdFor);
      CaixaFor.appendChild(Modificador);
      CaixaFor.appendChild(Titulo);
      divFicha.appendChild(CaixaFor);
    }

    if (campo.id === "destreza") {
      const CaixaDex = document.createElement("div");
      const QtdDex = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaDex.id = "caixaDex";
      QtdDex.id = "qtdDex";
      Modificador.id = "modDex";
      Titulo.id = "titDex";

      QtdDex.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "DEX";

      CaixaDex.appendChild(QtdDex);
      CaixaDex.appendChild(Modificador);
      CaixaDex.appendChild(Titulo);
      divFicha.appendChild(CaixaDex);
    }

    if (campo.id === "constituição") {
      const CaixaCon = document.createElement("div");
      const QtdCon = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaCon.id = "caixaCon";
      QtdCon.id = "qtdCon";
      Modificador.id = "modCon";
      Titulo.id = "titCon";

      QtdCon.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "CON";

      CaixaCon.appendChild(QtdCon);
      CaixaCon.appendChild(Modificador);
      CaixaCon.appendChild(Titulo);
      divFicha.appendChild(CaixaCon);
    }

    if (campo.id === "inteligência") {
      const CaixaInt = document.createElement("div");
      const QtdInt = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaInt.id = "caixaInt";
      QtdInt.id = "qtdInt";
      Modificador.id = "modInt";
      Titulo.id = "titInt";

      QtdInt.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "INT";

      CaixaInt.appendChild(QtdInt);
      CaixaInt.appendChild(Modificador);
      CaixaInt.appendChild(Titulo);
      divFicha.appendChild(CaixaInt);
    }

    if (campo.id === "sabedoria") {
      const CaixaSab = document.createElement("div");
      const QtdSab = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaSab.id = "caixaSab";
      QtdSab.id = "qtdSab";
      Modificador.id = "modSab";
      Titulo.id = "titSab";

      QtdSab.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "SAB";

      CaixaSab.appendChild(QtdSab);
      CaixaSab.appendChild(Modificador);
      CaixaSab.appendChild(Titulo);
      divFicha.appendChild(CaixaSab);
    }

    if (campo.id === "carisma") {
      const CaixaCar = document.createElement("div");
      const QtdCar = document.createElement("p");
      const Modificador = document.createElement("h2");
      const Titulo = document.createElement("h4");

      CaixaCar.id = "caixaCar";
      QtdCar.id = "qtdCar";
      Modificador.id = "modCar";
      Titulo.id = "titCar";

      QtdCar.textContent = campo.valueAsNumber;
      Modificador.textContent = calculaModificador(campo.valueAsNumber);
      Titulo.textContent = "CHA";

      CaixaCar.appendChild(QtdCar);
      CaixaCar.appendChild(Modificador);
      CaixaCar.appendChild(Titulo);
      divFicha.appendChild(CaixaCar);
    }
  }
}

const atributos = document.getElementsByClassName("atr");
for (let i = 0; i < atributos.length; i++) {
  atributos[i].addEventListener("input", imprimeCustoAtributo);
}
form.addEventListener("submit", criarFicha);
