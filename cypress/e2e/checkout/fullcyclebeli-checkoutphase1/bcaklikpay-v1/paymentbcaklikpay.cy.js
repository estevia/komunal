//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME');
const password = Cypress.env('ALPHA_PASSWORD');

//POSITIVE CASE : Should Success When Checkout Payment with BCA Klikpay
describe('Should Success When Checkout Payment with BCA Klikpay', () => {
  const checkoutPayment = () => {
    cy.log('Waitting BCA Klikpay')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnBCAKlikpay', 'btnLastBCAKlikpay'];
        if ($body.find('div[data-testid="btnBCAKlikpay"]').length) {
            return 'div[data-testid="btnBCAKlikpay"]'
        }
    
        if ($body.find('div[data-testid="btnLastBCAKlikpay"]').length) {
          return 'div[data-testid="btnLastBCAKlikpay"]'
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
    cy.get('div')
      .contains('BCA KlikPay')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('bcaklikpay-selesaikanpembayaran');
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
