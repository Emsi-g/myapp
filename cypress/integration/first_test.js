/// <reference types="cypress" />

it('Navigate product and review', function() {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="product/review"]').click()

    cy.url().should('include', '/product/review')
})