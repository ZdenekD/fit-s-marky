/* global cy */
import data from '../../../src/data/pages.json';

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Load properly with title', () => {
        const {title} = data.index;

        cy.title().should('include', title);
    });

    it('Match snapshot', () => {
        cy.wait(1000);
        cy.percySnapshot();
    });
});
