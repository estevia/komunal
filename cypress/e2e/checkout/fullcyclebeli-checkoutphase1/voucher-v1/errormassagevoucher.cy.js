const webUrl = Cypress.env('ALPHA_BASE_URL')
const email = Cypress.env('ALPHA_USERNAME_VOUCHER');
const password = Cypress.env('ALPHA_PASSWORD_VOUCHER');

  const checkout = () => {
    cy.viewport(1536, 1080)
    cy.get('div')
      .contains('Rincian Pesanan', { timeout: 20000 })
      .should('be.visible');

    cy.get('div')
      .contains('Metode Pengiriman:', { timeout: 10000 })
      .next()
      .click();

    cy.get('div').contains('Reguler (').click();
    cy.wait(2000)

    cy.contains('Tambah Voucher')
      .click()

//Kode kupon tidak terdefinisi
    cy.wait(3000)
    cy.get('.r-1habvwh > .r-1awozwy')
      .click()

      cy.contains('Kode voucher tidak lengkap/salah')

//Kupon tidak valid
    cy.get('[placeholder="Masukkan kode voucher"]')
      .type(Cypress.env('ALPHA_INVALID_VOUCHER'))

    cy.wait(3000)
    cy.get('[class="css-1dbjc4n r-1awozwy r-1rgl43a r-kdyh1x r-1loqt21 r-ublq6k r-18u37iz r-a023e6 r-tmtnm0 r-1777fci r-q92mtd r-ymttw5 r-1otgn73 r-1i6wzkk r-lrvibr"]')
      .click()  

      cy.contains('Voucher tidak valid')

//Kupon tidak bisa digunakan kembali
    cy.get('[placeholder="Masukkan kode voucher"]')
    .type(Cypress.env('ALPHA_VOUCHER'))

    cy.wait(3000)
    cy.get('[class="css-1dbjc4n r-1awozwy r-1rgl43a r-kdyh1x r-1loqt21 r-ublq6k r-18u37iz r-a023e6 r-tmtnm0 r-1777fci r-q92mtd r-ymttw5 r-1otgn73 r-1i6wzkk r-lrvibr"]')
    .click()   

    cy.contains('Kode voucher yang sudah kamu gunakan tidak bisa digunakan lagi dengan voucher lainnya')
    
  };

  describe('pcp', () => {
    it('pcp', () => {
      cy.addToCart();
      cy.doLogin(email, password);
      cy.cartdetail();
      checkout();
    });
  });