/* global cy */
import data from '../../../src/data/pages.json';

describe('Page - contact', () => {
    beforeEach(() => {
        const {slug} = data.pages.find(item => item.id === 'contact');

        cy.visit(`/${slug}`);
    });

    it('Load properly with title', () => {
        const {title} = data.pages.find(item => item.id === 'contact');

        cy.title().should('include', title);
    });

    it('Match snapshot', () => {
        cy.wait(400);
        cy.percySnapshot('Page - contact');
    });
});
