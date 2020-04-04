/* global cy */
import data from '../../../src/data/pages.json';

describe('Page - gallery', () => {
    beforeEach(() => {
        const {slug} = data.pages.find(item => item.id === 'gallery');

        cy.visit(`/${slug}`);
    });

    it('Load properly with title', () => {
        const {title} = data.pages.find(item => item.id === 'gallery');

        cy.title().should('include', title);
    });

    it('Goes to concrete gallery section', () => {
        const {slug, title} = data.pages.find(item => item.id === 'gallery-excercise');

        cy.get(`[href="/${slug}"]`).click();
        cy.wait(400);
        cy.get('[data-test="component-heading"]').should('contain', title);
        cy.get('[data-test="component-button"]').first().click();
        cy.get('.ReactModal__Content').should('be.visible');
        cy.get('[data-test="component-close"]').click();
        cy.get('.ReactModal__Content').should('not.be.visible');
    });

    it('Match snapshot', () => {
        cy.wait(400);
        cy.percySnapshot('Page - gallery');
    });
});
