const webUrl = Cypress.env('BASE_URL');

const register = () => {
    cy.visit(`${webUrl}/signup/deposan`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')  
    cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
    function userID_Numeric() {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
    cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
    cy.getElementByTestId('inpRegisterPassword').type('123456')
    cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();
    }
describe('Register', () => {
    it('Register', () => {
    register();
    });
    });