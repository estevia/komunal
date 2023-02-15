// const webUrl = process.env.WEB_URL ?? Cypress.env('webUrl');

// const login = () => {
//   cy.fixture('account').then((account) => {
//     cy.getElementByTestId('btnHeaderLogin').click();
//     cy.getElementByTestId('txtLoginEmail').type(account.email);
//     cy.getElementByTestId('txtLoginPassword').type(account.password);
//     cy.getElementByTestId('btnLogin').click();

//     cy.getElementByTestId('hvrHeaderProfile', { timeout: 30000 }).should(
//       'be.visible',
//     );
//   });
// };

// const addToCart = async () => {
//   cy.visit(
//     `${webUrl}/product/lemonilo-bumbu-penyedap-segala-all-purpose-seasoning`,
//   );

//   cy.getElementByTestId('btnProductBuy').contains('Beli').first().click();

//   cy.contains('Produk berhasil ditambahkan ke keranjang!', {
//     timeout: 10000,
//   }).should('be.visible');
// };

// const checkoutPayment = () => {
//   cy.get('div').contains('Pembayaran', { timeout: 20000 }).should('be.visible');
//   cy.get('div').contains('Bank Transfer', { timeout: 20000 }).next().click();

//   cy.get('div')
//     .contains('Bank Transfer')
//     .next()
//     .find('img', { timeout: 10000 })
//     .should('have.attr', 'src')
//     .should('include', 'check.png');

//   cy.wait(1000);

//   cy.get('div')
//     .contains(/^Bayar dengan Bank Transfer$/, { timeout: 10000 })
//     .click();

//   cy.get('div')
//     .contains('Silahkan Selesaikan Pembayaran Anda', { timeout: 20000 })
//     .should('be.visible');
// };

// const checkout = () => {
//   cy.getElementByTestId('btnHeaderCart').click();
//   cy.getElementByTestId('btnCartCheckout', { timeout: 10000 })
//     .contains('Checkout')
//     .click();

//   cy.get('div')
//     .contains('Rincian Pesanan', { timeout: 20000 })
//     .should('be.visible');

//   cy.get('div')
//     .contains('Metode Pengiriman:', { timeout: 10000 })
//     .next()
//     .click();

//   cy.get('div').contains('Reguler (').click();
//   cy.get('div').contains('Lanjut ke Pembayaran', { timeout: 10000 }).click();

//   checkoutPayment();
// };

// describe('Checkout', () => {
//   it('Checkout', () => {
//     cy.task('log', `Website Url: ${webUrl}`);

//     addToCart();
//     login();
//     checkout();
//   });
// });
