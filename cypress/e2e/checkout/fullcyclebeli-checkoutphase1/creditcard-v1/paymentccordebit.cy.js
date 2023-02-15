//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME_PAYMENT');
const password = Cypress.env('ALPHA_PASSWORD_PAYMENT');

describe('Should Success When Checkout Payment with  Credit or Debit Card', () => {
  const checkoutPayment = () => {
    cy.log('Waitting Credit Card')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnCreditDebitInstalmentCard', 'btnLastCreditDebitInstalmentCard'];
        if ($body.find('div[data-testid="btnCreditDebitInstalmentCard"]').length) {
            return 'div[data-testid="btnCreditDebitInstalmentCard"]'
        }
    
        if ($body.find('div[data-testid="btnLastCreditDebitInstalmentCard"]').length) {
          return 'div[data-testid="btnLastCreditDebitInstalmentCard"]'
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
      .contains('Terjadi kesalahan pada sistem kami, silakan coba beberapa saat lagi.')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('CreditorDebitCard-PaymentFailed');
  };

  const cartdetail = () => {
    cy.getElementByTestId('hvrHeaderProfile').should('be.visible');
    cy.getElementByTestId('btnHeaderCart').click();
    cy.log('Waitting Free Ongkir Modals')
    cy.wait(500)
    cy.get('body')
      .then($body => {
        if ($body.find('div[data-testid="btnOKFreeShipping"]').length) {
          return 'div[data-testid="btnOKFreeShipping"]'
        }
        return null;
      }).then(selector => {
        if (selector) {
          cy.get(selector).should('be.visible').click();
        }
      })

    cy.getElementByTestId('btnCartCheckout')
      .contains('Checkout')
      .click()
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
      cartdetail();
      checkout();
    });
  });  
})
//END POSITIVE CASE : Should Success When Checkout Payment with Credit or Debit Card