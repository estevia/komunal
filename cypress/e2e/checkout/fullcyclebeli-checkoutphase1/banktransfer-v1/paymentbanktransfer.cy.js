//GLOBAL VARIABLE
const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME');
const password = Cypress.env('ALPHA_PASSWORD');

//POSITIVE CASE : Should Success When Checkout Payment with Bank Transfer
describe('Should Success When Checkout Payment with Bank Transfer', () => {
  const checkoutPayment = () => {
    cy.log('Waitting Bank Transfer (Verifikasi Manual)')
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
      .contains('Silahkan Selesaikan Pembayaran Anda')
      .should('be.visible');
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('banktransfer-selesaikanpembayaran');
    cy.get('div')
      .contains('Konfirmasi Pembayaran')
      .click()
    cy.get('[class="css-901oao r-hpxsc5 r-ba7s3 r-1inkyih r-1vr29t4 r-117bsoe"]')
      .should('be.visible')
    // Cypress.Screenshot.defaults({ capture: 'runner' });
    // cy.screenshot('banktransfer-orderdetail');
    cy.get('[placeholder="Pilih bank tujuan"]').click()
    cy.get('div')
      .contains('BCA')
      .click()
    // cy.get('div')
    //   .contains('Upload File')
    //   .click()
    // cy.get("input[type=file]")
    //   .attachFile("confirmbanktransfer.png")
    cy.get('[class="css-901oao r-ba7s3 r-1inkyih r-16dba41 r-3ucsff r-7ptqe7 r-ku1wi2 r-1joea0r"]')
      .should('be.visible')
    Cypress.Screenshot.defaults({ capture: 'runner' });
    cy.screenshot('multipleproduct-orderdetail');
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
//END POSITIVE CASE : Should Success When Checkout Payment with Bank Transfer
