//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME');
const password = Cypress.env('ALPHA_PASSWORD');

describe('Should Success When Checkout Payment with Jenius', () => {
  const checkoutPayment = () => {
    cy.log('Waitting Jenius')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnJeniusPay', 'btnLastJeniusPay'];
        if ($body.find('div[data-testid="btnJeniusPay"]').length) {
            return 'div[data-testid="btnJeniusPay"]'
        }
    
        if ($body.find('div[data-testid="btnLastJeniusPay"]').length) {
          return 'div[data-testid="btnLastJeniusPay"]'
        }
        return null;
      }).then(selector => {
      cy.log('selector', selector);
      if (selector) {
          cy.get(selector).should('be.visible').click();
      }
    })

    cy.getElementByTestId('inCASHTAG').type('$jeniuspay001')
    cy.wait(2000);
    cy.get('div')
      .getElementByTestId('btnPay')
      .click();
    cy.get('div')
      .contains('Silahkan Selesaikan Pembayaran Anda')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('jenius-selesaikanpembayaran');
    cy.get('div')
      .contains('Cek Detail Pesanan')
      .click()
    cy.get('[class="css-901oao r-ba7s3 r-1inkyih r-16dba41 r-3ucsff r-7ptqe7 r-ku1wi2 r-1joea0r"]')
      .should('be.visible')
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('jenius-orderdetail');
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
