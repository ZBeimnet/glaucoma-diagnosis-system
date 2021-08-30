describe('My First Test', () => {
    it('Visit our web-app', () => {
        cy.visit('https://glaucoma-diagnosis.netlify.app')
        
        cy.contains('Login').click()

        cy.url().should('include', '/dashboard')
    })
})