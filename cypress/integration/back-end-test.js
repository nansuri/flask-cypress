describe('Back End Test Cases', () => {

   it('Validate the header', () => {
       cy.request('http://nansuri.online/api/page')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json');
   });

   it('Validate the status code', () => {
       cy.request('http://nansuri.online/api/page')
           .its('status')
           .should('equal', 200);
   });

   it('Validate the body content', () => {
       cy.request('http://nansuri.online/api/page')
       .then((response) => {
            expect(response.body).to.not.be.null;
       })
   });
});