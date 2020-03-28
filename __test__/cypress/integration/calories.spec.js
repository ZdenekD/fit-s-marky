/* global cy */
import data from '../../../src/data/pages.json';

describe('Page - calories', () => {
    beforeEach(() => {
        const {slug} = data.pages.find(item => item.id === 'calories');

        cy.visit(`/${slug}`);
    });

    it('Load properly with title', () => {
        const {title} = data.pages.find(item => item.id === 'calories');

        cy.title().should('include', title);
    });

    it('Match snapshot', () => {
        cy.wait(400);
        cy.percySnapshot();
    });
});
