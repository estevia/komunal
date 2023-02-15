//GLOBAL VARIABLE
const web = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME_VOUCHER');
const password = Cypress.env('ALPHA_PASSWORD_VOUCHER');

describe('Should Success When Checkout Multiple Product with Apply Moni Coins', () => {
  const checkoutPayment = () => {
    cy.log('Waitting Virtual Account')
    cy.wait(6000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['btnPaymentVA', 'btnLastPaymentVA'];
        if ($body.find('div[data-testid="btnPaymentVA"]').length) {
            return 'div[data-testid="btnPaymentVA"]'
        }
        
        if ($body.find('div[data-testid="btnLastPaymentVA"]').length) {
            return 'div[data-testid="btnLastPaymentVA"]'
        }
            return null;
      }).then(selector => {
    cy.log('selector', selector);
        if (selector) {
    cy.get(selector).should('be.visible').click();
        }
    })
    cy.wait(2000)
    cy.get('body')
      .then($body => {
        let possibleBtnBankTransfer = ['radPaymentVABCA', 'radLastPaymentVABCA'];
        if ($body.find('div[data-testid="radPaymentVABCA"]').length) {
            return 'div[data-testid="radPaymentVABCA"]'
        }
        
        if ($body.find('div[data-testid="radLastPaymentVABCA"]').length) {
            return 'div[data-testid="radLastPaymentVABCA"]'
        }
            return null;
      }).then(selector => {
    cy.log('selector', selector);
          if (selector) {
    cy.get(selector).should('be.visible').click();
        }
      })
    cy.wait(3000);
    cy.get('div')
      .getElementByTestId('btnPay')
      .click();
    cy.get('div')
      .contains('Terima Kasih telah melakukan pembayaran!')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('multipleproductapplymonicoins-terimakasih');
    cy.get('div')
      .contains('Cek Detail Pesanan')
      .click()
    cy.get('[class="css-901oao r-ba7s3 r-1inkyih r-16dba41 r-3ucsff r-7ptqe7 r-ku1wi2 r-1joea0r"]')
        .should('be.visible')
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('multipleproductapplymonicoins-orderdetail');
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
    cy.wait(3000)
    cy.get('[class="css-1dbjc4n r-1loqt21 r-13awgt0 r-18u37iz r-1h0z5md r-1otgn73 r-1i6wzkk r-lrvibr"]')
      .click()
    cy.wait(3000)
    cy.get('div')
      .contains('Lanjut ke Pembayaran')
      .click();
    checkoutPayment();
  };

  //before each fungsi yang jalan duluan setiap testcases run
  describe('Checkout', () => {
    it('Checkout', () => {
      cy.checkURL(web);
      cy.addToCartMultiple();
      cy.doLogin(email, password);
      cy.cartdetail();
      checkout();
    });
  });  
})
//END POSITIVE CASE : Should Success When Checkout Multiple Product with Apply Moni Coins