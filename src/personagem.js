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
        case(xp < 34000):
            return 7;
            break;
        case(xp < 48000):
            return 8;
            break;
        case(xp < 64000):
            return 9;
            break;
        case(xp < 85000):
            return 10;
            break;
        case(xp < 100000):
            return 11;
            break;
        case(xp < 120000):
            return 12;
            break;
        case(xp < 140000):
            return 13;
            break;
        case(xp < 165000):
            return 14;
            break;
        case(xp < 195000):
            return 15;
            break;
        case(xp < 225000):
            return 16;
            break;
        case(xp < 265000):
            return 17;
            break;
        case(xp < 305000):
            return 18;
            break;
        case(xp < 355000):
            return 19;
            break;
        case(xp >= 355000):
            return 20;
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