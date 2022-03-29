#language: pt

@enumerations_vrpat
Funcionalidade: possui a chave “typeOfEstablishment”
  O objetivo dessa automação é validar se o serviço possui a chave“typeOfEstablishment”

  Cenário: Validar os estabelecimentos do endpoint api-web_comum_enumerations_VRPAT.get
    Dado que eu tenho um endpoint valido
    Quando quando enviar a requisicao api-web_comum_enumerations_VRPAT.get
    Então valido se no retorno do endpoint tem a chave typeOfEstablishment
