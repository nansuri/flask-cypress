describe('Front End Test Cases', function() {
    it('Verify Show Text button is working', function() {
        cy.visit('http://nansuri.online/')
        cy.contains('Show Text').click()
        cy.get('#text-wow').should('have.text', "Showing")
    })

    it('Verify Next Page button is working', function() {
        cy.visit('http://nansuri.online/')
        cy.contains('Next Page').click()
        cy.get('body > div > div').should('have.text', "WELCOME TO PAGE TWO!")
    })
  })