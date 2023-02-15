//commands element test id
Cypress.Commands.add('getElementByTestId', (value, options) => {
  return cy.get(`[data-testid="${value}"]`, options);
});

Cypress.Commands.add('findElementByTestId', (value, options) => {
  return cy.find(`[data-testid="${value}"]`, options);
});

//command get text from element and only take the numbers
Cypress.Commands.add('getTextNumber', (value) => {
  return cy.contains(`${value}`).then(($x) => {
    const text = $x.text();
    const z = text.replace(/\D/g, '');
    cy.wrap(z).as('result');
  });
});

//command get text from element
Cypress.Commands.add('getText', (value) => {
  return cy.get(`${value}`).then(($x) => {
    const text = $x.text();
    cy.wrap(text).as('result');
  });
});

//command to check url
Cypress.Commands.add('checkURL', (web) => {
  const website = web;
  cy.visit(`${website}`);
  cy.request('GET', `${website}`).then((response) => {
    expect(response.status).to.eq(200);
    cy.log('Koneksi aman');
  });
});

//Commands login
Cypress.Commands.add('doLogin', (email, password) => {
  const passwords = password;
  const emails = email;
  cy.contains('Masuk').click();
  cy.getElementByTestId('txtLoginEmail').type(`${emails}`);
  cy.getElementByTestId('txtLoginPassword').type(`${passwords}{enter}`);
});

Cypress.Commands.add('login', () => {
  const email = Cypress.env('ALPHA_LOGIN_USERNAME');
  const password = Cypress.env('ALPHA_LOGIN_PASSWORD');
  cy.fixture('account').then((account) => {
    cy.getElementByTestId('btnHeaderLogin').click();
    cy.getElementByTestId('txtLoginEmail').type(`${email}`);
    cy.getElementByTestId('txtLoginPassword').type(`${password}`);
    cy.getElementByTestId('btnLogin').click();
    cy.getElementByTestId('hvrHeaderProfile', { timeout: 40000 }).should(
      'be.visible',
    );
  });
});

//Command add to cart via product detail
Cypress.Commands.add('addToCart', () => {
  const webUrl = Cypress.env('BASE_URL');
  cy.visit(
    `${webUrl}/product/lemonilo-bumbu-penyedap-segala-all-purpose-seasoning`,
  );
  // Cypress.Screenshot.defaults({ capture: 'runner' });
  // cy.screenshot();
  cy.getElementByTestId('btnProductBuy').contains('Beli').first().click();
  cy.contains('Produk berhasil ditambahkan ke keranjang!').should('be.visible');
});

//Command add to cart multiple product via product result
Cypress.Commands.add('addToCartMultiple', () => {
  // const webUrl = Cypress.env('ALPHA_BASE_URL');
  // cy.visit(`${webUrl}`);
  cy.getElementByTestId('txtHeaderSearchBar').type(
    'kaldu pelezat jamur{enter}',
  );
  cy.wait(2000);
  cy.getElementByTestId('btnProductBuy').click(
    { force: true },
    { timeout: 40000 },
  );
  cy.getElementByTestId('btnProductBuy').contains('Beli').first().click();
  cy.wait(2000);
  cy.getElementByTestId('btnProductPlus').click();

  cy.getElementByTestId('txtHeaderSearchBar').type(
    'kaldu pelezat ayam kampung{enter}',
  );
  cy.wait(2000);
  cy.getElementByTestId('btnProductBuy').click(
    { force: true },
    { timeout: 40000 },
  );
  cy.getElementByTestId('btnProductBuy').contains('Beli').first().click();
  cy.wait(2000);
  cy.getElementByTestId('btnProductPlus').click();
});

//Command cart detail
Cypress.Commands.add('cartdetail', () => {
  cy.getElementByTestId('hvrHeaderProfile').should('be.visible');
  cy.getElementByTestId('btnHeaderCart').click();
  cy.log('Waitting Free Ongkir Modals');
  cy.wait(1000);
  cy.get('body')
    .then(($body) => {
      if ($body.find('div[data-testid="btnOKFreeShipping"]').length) {
        return 'div[data-testid="btnOKFreeShipping"]';
      }
      return null;
    })
    .then((selector) => {
      if (selector) {
        cy.get(selector, { timeout: 10000 }).should('be.visible').click();
      }
    });

  cy.getElementByTestId('btnCartCheckout', { timeout: 10000 })
    .contains('Checkout')
    .click();
});

Cypress.Commands.add('RegistrationNewUser', (x, y, z) => {
  /**
   * this function about to registration new user
   * beware to use this function, cause if you run multiple times
   * it means you add multiple spam email on database
   * generate email +(nowMinute)(nowSecond)(nowHours)
   * parameter x is your head email, ex: revitasurya
   * parameter y is your name
   * parameter z is your password
   * call with cy.RegistrationNewUser(yourheademail);
   */
  let name = y;
  let email = x;
  let pass = z;
  var d = new Date();
  let minute = d.getMinutes();
  let hours = d.getHours();
  let second = d.getSeconds();
  let timenow = '' + minute + hours + second;
  cy.get(
    '[data-testid="btnHeaderRegister"] > a > .css-1dbjc4n > .css-901oao',
  ).click();
  cy.get('[data-testid="inpRegisterEmail"]').type(
    `${email}` + '+' + `${timenow}` + '@lemonilo.com',
  );
  cy.get('[data-testid="inpRegisterPassword"]').type(`${pass}`);
  cy.get('[data-testid="inpRegisterName"]').type(`${name}`);
  cy.get('[data-testid="btnRegister"] > .css-1dbjc4n').click();
  cy.wait(100);
  cy.get('[data-testid="btnWelcomeStartHealthy"]').click();
});

//Command add to cart - checkout
Cypress.Commands.add('HomepagetoCheckout', () => {
  cy.get('div')
    .contains('Rincian Pesanan')
    .should('be.visible');
  cy.get('div')
    .contains('Metode Pengiriman:')
    .next()
    .click();
  cy.get('div').contains('Reguler (').click();
  cy.get('div').contains('Lanjut ke Pembayaran').click();

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
    .contains('Virtual Account Sudah Digunakan')
    .should('be.visible');
  cy.get('div')
    .contains('Lanjutkan Pembayaran')
    .click();
  cy.get('div')
    .contains('Silahkan Selesaikan Pembayaran Anda')
    .should('be.visible');
  // Cypress.Screenshot.defaults({ capture: 'runner' });
  // cy.screenshot('multipleproduct-selesaikanpembayaran');
  cy.get('div')
    .contains('Cek Detail Pesanan')
    .click()
  cy.get('[class="css-901oao r-ba7s3 r-1inkyih r-16dba41 r-3ucsff r-7ptqe7 r-ku1wi2 r-1joea0r"]')
    .should('be.visible')
  // Cypress.Screenshot.defaults({ capture: 'runner' });
  // cy.screenshot('multipleproduct-orderdetail');
});
