const webUrl = Cypress.env('BASE_URL');

const signup = () => {
    cy.visit(`${webUrl}/signup/deposan`)}


    describe('signup', () => {
        it('signup', () => {
            signup();
        });
        });