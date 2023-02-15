//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME');
const password = Cypress.env('ALPHA_PASSWORD');

describe('Should Success When Checkout Payment with Kredivo', () => {
  const checkoutPayment = () => {
    cy.log('Waitting Kredivo')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnKredivo', 'btnLastKredivo'];
        if ($body.find('div[data-testid="btnKredivo"]').length) {
            return 'div[data-testid="btnKredivo"]'
        }
    
        if ($body.find('div[data-testid="btnLastKredivo"]').length) {
          return 'div[data-testid="btnLastKredivo"]'
        }
        return null;
      }).then(selector => {
      cy.log('selector', selector);
      if (selector) {
          cy.get(selector).should('be.visible').click();
      }
    })

    cy.wait(2000);
    cy.get('div')
      .getElementByTestId('btnPay')
      .click();
    cy.wait(1000)
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('kredivo-masukkeakunkredivo');
  };

  const checkout = () => {
    cy.get('div')
      .contains('Rincian Pesanan')
      .should('be.visible');
    cy.get('div')
      .contains('Metode Pengiriman:')
      .next()
      .click();
    cy.get('div').contains('Reguler (').click();
    cy.get('div').contains('Lanjut ke Pembayaran').click();

    checkoutPayment();
  };

  //before each fungsi yang jalan duluan setiap testcases run
  describe('Checkout', () => {
    it('Checkout', () => {
      cy.addToCart();
      cy.doLogin(email, password);
      cy.cartdetail();
      checkout();
    });
  });  
})
//END POSITIVE CASE : Should Success When Checkout Payment with BCA Klikpay
