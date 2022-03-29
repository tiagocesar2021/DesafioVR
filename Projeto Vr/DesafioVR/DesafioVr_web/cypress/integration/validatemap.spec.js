/// <reference types="cypress" />


describe ('Validar mapa no site ', ()=> {
    //Acessando a pagina Home do site VR a BaseUrl está no arquivo "cypress.json"
    it ('acessar a pagina inicial do sitte VR', ()=> {
        cy.visit('/')
    })

    //Aceitando os Termos de Privacidade da pagina
    it ('Aceitar os termos de privacidade', ()=> {
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click();
    })

    //Localizando o botao "PRA VOCE" e clicando
    it ('Navegar até a seção - pra voce', ()=> {
        cy.get(':nth-child(3) > .vr-main-navigation__link').click();        
    })
    //Apos clicar no botao, estou validando se realmente fui direcionado para a pagina correta (/onde-aceita.htm)
    it ('Validar se estou na pagina correta', ()=> {
        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/onde-aceita.htm`
          )
    })

    //Localizando o botao "ONDE USAR MEU CARTAO VR" e clicando
    it ('Clicar no botão - Onde usar meu cartão VR', ()=> {
        cy.get('.vr-button.vr-button--negative').click();

        //Aqui eu estou validando se o MAPA está visivel após clicar no botão
        cy.get('#map').should('be.visible').wait(4000);
    })

});