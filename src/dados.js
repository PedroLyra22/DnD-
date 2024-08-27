function rolaDados(quandidadeDeLados, quantidadeDeDados = 1){
    return Array.from({ length: quantidadeDeDados},
        () => Math.ceil(Math.random() * quandidadeDeLados))
  }