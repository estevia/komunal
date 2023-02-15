//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME_VOUCHER');
const password = Cypress.env('ALPHA_PASSWORD_VOUCHER');

describe('Should Success When Checkout Apply Moni Coins', () => {
  const checkoutPayment = () => {
    cy.log('Waitting MoniCoins)')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnBankTransfer', 'btnLastBankTransfer'];
        if ($body.find('div[data-testid="btnBankTransfer"]').length) {
            return 'div[data-testid="btnBankTransfer"]'
        }
    
        if ($body.find('div[data-testid="btnLastBankTransfer"]').length) {
          return 'div[data-testid="btnLastBankTransfer"]'
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
      .contains('Terima Kasih telah melakukan pembayaran!')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('applymonicoins-terimakasih');
    cy.get('div')
      .contains('Cek Detail Pesanan')
      .click()
    cy.get('[class="css-901oao r-ba7s3 r-1inkyih r-16dba41 r-3ucsff r-7ptqe7 r-ku1wi2 r-1joea0r"]')
      .should('be.visible')
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('applymonicoins-orderdetail');
  };

  const checkout = () => {
    cy.get('div')
      .contains('Rincian Pesanan')
      .should('be.visible');
    cy.wait(2000)
    cy.get('div')
      .contains('Metode Pengiriman:')
      .next()
      .click();
    cy.get('div').contains('Reguler (').click();
    cy.get('[class="css-1dbjc4n r-1fg8wnh r-1dp2std r-z80fyv"]').click()
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
//END POSITIVE CASE : #1 Should Success When Checkout Apply Moni Coins