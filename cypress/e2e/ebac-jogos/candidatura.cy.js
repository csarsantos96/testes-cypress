/// <reference types="cypress" />

describe ('Testes para a pagina de candidatura', () => {

    beforeEach(() =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it ('Deve levar o usuário até o formulário de inscrição', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

        it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('cesar santos')
        cy.get('input[name="email"]').type('cesar@santos.com')
        cy.get('input[name="telefone"]').type('68 999228585')
        cy.get('input[name="endereco"]').type('rua jest, bairro cypress Rio Branco')
        cy.get('#mac').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) =>{
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        })
    })