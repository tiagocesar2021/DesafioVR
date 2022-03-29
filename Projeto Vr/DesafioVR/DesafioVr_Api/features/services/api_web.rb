module Apiweb
  include HTTParty
  base_uri 'https://portal.vr.com.br/api-web'
  format :json
  headers 'Content-Type': 'application/json'
end
