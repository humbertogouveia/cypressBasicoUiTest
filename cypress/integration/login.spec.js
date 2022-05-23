/// <reference types="cypress" />

describe('A suite teste é sobre login', () => {

    /**

    Dado que estou na página de login
    Quando insiro um usuario valido
    E uma senha valida
    Então sou logado com sucesso

    /** */

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })


    it('Deve realizar login com sucesso', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('.shopping_cart_link').should('be.visible').screenshot()
        cy.screenshot('Evidencia')
    })

    it('Não deve realizar com senha inválida', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('bla')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Epic sadface: Username and password do not any user in this service')
        .should('be.visible')
    })

})

