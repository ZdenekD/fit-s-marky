/* global cy */
describe('Homepage', () => {
    it('Load properly', () => {
        cy.visit('http://localhost:3010');
        cy.title().should('include', 'O mně');

        expect(true).to.equal(true);
    });
});
