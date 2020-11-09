describe('My test', () => {
    it('Should sign-up', () => {
        cy.visit('http://localhost:4100/');
        cy.contains('Sign up').click()
        cy.url().should('include', '/sign-up')

    })
})