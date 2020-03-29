/* global cy */
import data from '../../../src/data/pages.json';

describe('Page - body', () => {
    beforeEach(() => {
        const {slug} = data.pages.find(item => item.id === 'body');

        cy.visit(`/${slug}`);
    });

    it('Load properly with title', () => {
        const {title} = data.pages.find(item => item.id === 'body');

        cy.title().should('include', title);
    });

    it('Match snapshot', () => {
        cy.wait(400);
        cy.percySnapshot();
    });
});