
describe('Navigation', () => {
    it('Navigate product and review', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="product/review"]').click()

        cy.url().should('include', '/product/review')
    })

    it('Navigate about', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="about"]').click()

        cy.url().should('include', '/about')
    })

    it('Navigate MC', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="/profile"]').click()

        cy.url().should('include', '/profile/mc')
    })
})