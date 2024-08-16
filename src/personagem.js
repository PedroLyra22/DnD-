const mapAC = new Map([
  //Armaduras Leves (+DEX na AC)
  ["acolchoada", {
    AC: (modDES) => modDES + 11,
    Penalidade: true
  }],
  ["couro", {
    AC: (modDES) =>modDES + 11,
    Penalidade: false
  }],
  ["couro batido", {
    AC: (modDES) => modDES + 12,
    Penalidade: false
  }],
  //Armaduras Médias (+2 de DEX na AC)
  ["gibão de peles", {
    AC: ((modDES) => Math.min(modDES, 2) + 12),
    Penalidade: false
  }],
  ["camisão de malha", {
    AC: ((modDES) => Math.min(modDES, 2) + 13),
    Penalidade: false
  }], 
  ["brunea", {
    AC: ((modDES) => Math.min(modDES, 2) + 14),
    Penalidade: true
  }],
  ["espinhos", {
    AC: ((modDES) => Math.min(modDES, 2) + 14),
    Penalidade: true
  }],
  ["peitoral", {
    AC: ((modDES) => Math.min(modDES, 2) + 14),
    Penalidade: false
  }],
  ["meia-armadura", {
    AC: ((modDES) => Math.min(modDES, 2) + 15),
    Penalidade: true
  }],
  //Armaduras Pesadas (Possuem requisitos de força)
  ["cota de anéis", {
    AC: 14,
    Penalidade: true
  }],
  ["cota de malha", {
    AC: 16,
    Penalidade: true
  }],
  ["cota de talos", {
    AC: 17,
    Penalidade: true
  }],
  ["placas", {
    AC: 18,
    Penalidade: true
  }],
]);

const mapPxA = new Map([
  ["acrobacia", "destreza"],
  ["arcanismo", "inteligência"],
  ["atletismo", "força"],
  ["atuação", "carisma"],
  ["blefar", "carisma"],
  ["furtividade", "destreza"],
  ["história", "inteligência"],
  ["intimidação", "carisma"],
  ["intuição", "sabedoria"],
  ["investigação", "inteligência"],
  ["lidar com animais", "sabedoria"],
  ["medicina", "sabedoria"],
  ["natureza", "inteligência"],
  ["percepção", "sabedoria"],
  ["persuasão", "carisma"],
  ["prestidigitação", "destreza"],
  ["religião", "inteligência"],
  ["sobrevivência", "sabedoria"],
]);

function mapeiaPericias(atributo, pericia, map){
  this.pericias[pericia] = {
    proficiente: this.objPericias[pericia].proficiente,
    valor: this.atributos[atributo].modificador + (this.objPericias[pericia].proficiente ? this.bonusProficiencia : 0),
    atributo: atributo.slice(0,3).toUpperCase()
  }
}

//TO DO: Alimentar o map com o restantes das classes
const mapClass = new Map([
  ["Artífice", {
    save: ["inteligência", "constituição"],
    hitDice: 8,
  }],
  ["Bárbaro",{
    save: ["força", "constituição"],
    hitDice: 12,
  }],
  ["Bardo", {
    save: ["carisma", "destreza"],
    hitDice: 8,
  }],
])

class Personagem {
  constructor(objPersonagem, objAtributo, objPericias) {
    this.nome = objPersonagem.chaName;
    this.jogador = objPersonagem.playName;
    this.raça = objPersonagem.race;
    this.classe = objPersonagem.chaClass;
    this.antecedente = objPersonagem.background;
    this.alinhamento = objPersonagem.allingment;
    this.nivel = objPersonagem.nvl;
    this.bonusProficiencia = calculaBonusProficiencia(this.nivel);

    this.atributos = {};
    this.atributos.força = {
      valor: objAtributo.força,
      modificador: calculaModificador(objAtributo.força),
    };
    this.atributos.destreza = {
      valor: objAtributo.destreza,
      modificador: calculaModificador(objAtributo.destreza),
    };
    this.atributos.constituição = {
      valor: objAtributo.constituição,
      modificador: calculaModificador(objAtributo.constituição),
    };
    this.atributos.inteligência = {
      valor: objAtributo.inteligência,
      modificador: calculaModificador(objAtributo.inteligência),
    };
    this.atributos.sabedoria = {
      valor: objAtributo.sabedoria,
      modificador: calculaModificador(objAtributo.sabedoria),
    };
    this.atributos.carisma = {
      valor: objAtributo.carisma,
      modificador: calculaModificador(objAtributo.carisma),
    };

    this.pericias = {};
    this.objPericias = objPericias;
    mapPxA.forEach(mapeiaPericias, this);
    delete this.objPericias;

    this.iniciativa = {
      valor: this.atributos.destreza.modificador
    }

    this.percepçãoPassiva = {
      valor: this.pericias.percepção.valor + 10
    }

    this.intuiçãoPassiva = {
      valor: this.pericias.intuição.valor + 10
    }

    this.salvaguardas = {}
    this.mapeiaSalvaguardas()
  }
  
  imprime() {
    console.log(this);
  }

  mapeiaSalvaguardas(){
    const atributosP = mapClass.get(this.classe).save;
    Object.keys(this.atributos).forEach( nomeAtributo => {
      this.salvaguardas[nomeAtributo] = {
        valor: this.atributos[nomeAtributo].modificador + (atributosP.includes(nomeAtributo)? this.bonusProficiencia : 0),
        proficiente: atributosP.includes(nomeAtributo),
      }
    });   
  }


}

function calculaBonusProficiencia(nvl){
  switch(true){
    case nvl < 5:
      return 2;
      break;
    case nvl < 9:
      return 3;
      break;
    case nvl < 13:
      return 4;
      break;
    case nvl < 17:
      return 5;
      break;
    case nvl <= 20:
      return 6;
      break;
  }
}

function calculaCustoAtributos(atr) {
  var custo = [
    -20, -16, -12, -9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19,
  ];
  return custo[atr];
}

function somaCustosAtribustos(Afor, Adex, Acon, Aint, Asab, Acar) {
  return (
    calculaCustoAtributos(Number(Afor)) +
    calculaCustoAtributos(Number(Adex)) +
    calculaCustoAtributos(Number(Acon)) +
    calculaCustoAtributos(Number(Aint)) +
    calculaCustoAtributos(Number(Asab)) +
    calculaCustoAtributos(Number(Acar))
  );
}

function calculaModificador(atr) {
  return Math.floor((atr - 10) / 2);
}

//Função Esquecida :(
function calculaNivel(xp) {
  switch (true) {
    case xp < 300:
      return 1;
      break;
    case xp < 900:
      return 2;
      break;
    case xp < 2700:
      return 3;
      break;
    case xp < 6500:
      return 4;
      break;
    case xp < 14000:
      return 5;
      break;
    case xp < 23000:
      return 6;
      break;
    case xp < 34000:
      return 7;
      break;
    case xp < 48000:
      return 8;
      break;
    case xp < 64000:
      return 9;
      break;
    case xp < 85000:
      return 10;
      break;
    case xp < 100000:
      return 11;
      break;
    case xp < 120000:
      return 12;
      break;
    case xp < 140000:
      return 13;
      break;
    case xp < 165000:
      return 14;
      break;
    case xp < 195000:
      return 15;
      break;
    case xp < 225000:
      return 16;
      break;
    case xp < 265000:
      return 17;
      break;
    case xp < 305000:
      return 18;
      break;
    case xp < 355000:
      return 19;
      break;
    case xp >= 355000:
      return 20;
      break;
  }
}
