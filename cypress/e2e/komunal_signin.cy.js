const webUrl = Cypress.env('BASE_URL');

const signin = () => {
    cy.visit(`${webUrl}/signin`)}


    describe('signin', () => {
        it('signin', () => {
            signin();
        });
        });