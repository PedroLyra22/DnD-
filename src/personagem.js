function calculaNivel(xp){
    switch (true) {
        case(xp < 300):
            return 1;
            break;
        case(xp < 900):
            return 2;
            break;
        case(xp < 2700):
            return 3;
            break;    
        case(xp < 6500):
            return 4;
            break;
        case(xp < 14000):
            return 5;
            break;
        case(xp < 23000):
            return 6;
            break; 
        //...

        default:
            console.log("entrei default");
            return Math.floor((Number(campo.value) + 100) / 100);

            break;
    }
}

function calculaCustoAtributos(atr){ 
    var custo = [-20, -16, -12, -9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19];
    return custo[atr];
}

function somaCustosAtribustos(Afor, Adex, Acon, Aint, Asab, Acar){
    return calculaCustoAtributos(Afor)+
           calculaCustoAtributos(Adex)+
           calculaCustoAtributos(Adex)+
           calculaCustoAtributos(Acon)+
           calculaCustoAtributos(Aint)+
           calculaCustoAtributos(Asab)+
           calculaCustoAtributos(Acar)
}