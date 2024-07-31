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
    this.pericias.acrobacia = {
      proficiente: objPericias.acrobacia.proficiente,
      valor: this.atributos.destreza.modificador,
    };
    this.pericias.arcanismo = {
      proficiente: objPericias.arcanismo.proficiente,
      valor: this.atributos.inteligência.modificador
    }
    this.pericias.atletismo = {
      proficiente: objPericias.atletismo.proficiente,
      valor: this.atributos.força.modificador
    }
    this.pericias.atuação = {
      proficiente: objPericias.atuação.proficiente,
      valor: this.atributos.carisma.modificador
    }
    this.pericias.blefar = {
      proficiente: objPericias.blefar.proficiente,
      valor: this.atributos.carisma.modificador
    }
    this.pericias.furtividade = {
      proficiente: objPericias.furtividade.proficiente,
      valor: this.atributos.destreza.modificador
    }
    this.pericias.história = {
      proficiente: objPericias.história.proficiente,
      valor: this.atributos.inteligência.modificador
    }
    this.pericias.intimidação = {
      proficiente: objPericias.intimidação.proficiente,
      valor: this.atributos.carisma.modificador
    }
    this.pericias.intuição = {
      proficiente: objPericias.intuição.proficiente,
      valor: this.atributos.sabedoria.modificador
    }
    this.pericias.investigação = {
      proficiente: objPericias.investigação.proficiente,
      valor: this.atributos.inteligência.modificador
    }
    this.pericias.animais = {
      proficiente: objPericias.animais.proficiente,
      valor: this.atributos.sabedoria.modificador
    }
    this.pericias.medicina = {
      proficiente: objPericias.medicina.proficiente,
      valor: this.atributos.sabedoria.modificador
    }
    this.pericias.natureza = {
      proficiente: objPericias.natureza.proficiente,
      valor: this.atributos.inteligência.modificador
    }
    this.pericias.percepção = {
      proficiente: objPericias.percepção.proficiente,
      valor: this.atributos.sabedoria.modificador
    }
    this.pericias.persuasão = {
      proficiente: objPericias.persuasão.proficiente,
      valor: this.atributos.carisma.modificador
    }
    this.pericias.prestidigitação = {
      proficiente: objPericias.prestidigitação.proficiente,
      valor: this.atributos.destreza.modificador
    }
    this.pericias.religião = {
      proficiente: objPericias.religião.proficiente,
      valor: this.atributos.inteligência.modificador
    }
    this.pericias.sobrevivência = {
      proficiente: objPericias.sobrevivência.proficiente,
      valor: this.atributos.sabedoria.modificador
    }

  }
  
  imprime() {
    console.log(this);
  }
  
  retornaPericia(nomePericia) {
    if (this.pericias[nomePericia].proficiente){
      return this.pericias[nomePericia].valor + this.bonusProficiencia
    }
    return this.pericias[nomePericia].valor
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
