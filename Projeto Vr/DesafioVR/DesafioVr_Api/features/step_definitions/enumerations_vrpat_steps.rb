Dado('que eu tenho um endpoint valido') do
  puts "http://portal.vr.com.br/api-web/comum/enumerations/VRPAT"
end
Quando('quando enviar a requisicao api-web_comum_enumerations_VRPAT.get') do
  @api_web = Apiweb.get('/comum/enumerations/VRPAT', verify: false)
end

Então('valido se no retorno do endpoint tem a chave typeOfEstablishment') do
  response = @api_web
  expect(response).to have_key('typeOfEstablishment')
  log(response['typeOfEstablishment'].sample)
  log(response['status'])
end
