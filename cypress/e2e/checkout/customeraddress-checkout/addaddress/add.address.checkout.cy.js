const webUrl = Cypress.env('ALPHA_BASE_URL')


const checkURL = () => {

    let cmd = Cypress.log({
        name:"buat login",
        consoleProps(){
            return{
                "ini step login b2c pake email dan password":[myelement.email, 
                    myelement.password2],
            }
        },
    })

    
    cy.visit(`${webUrl}`);
    cy.request('GET',`${webUrl}`).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Koneksi aman');
    })
    
    ;
}

const checkout = () => {
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
          cy.get(selector, { timeout: 10000, }).should('be.visible').click();
        }
      })

  cy.getElementByTestId('btnCartCheckout', { timeout: 10000 })
      .contains('Checkout')
      .click();
  
  cy.get('div')
    .contains('Rincian Pesanan', { timeout: 20000 })
    .should('be.visible');


  cy.wait(3000)

  Cypress.Screenshot.defaults({ capture: 'runner' });
  cy.screenshot('add_address');
  
  cy.get('div')
    .contains('Pilih Alamat Lain',{ timeout: 20000 })
    .click();

  cy.get('div')
    .contains('Tambah Alamat Baru')
    .click();

  


  cy.wait(2000);

  cy.get('[placeholder="Pilih nama alamat"]').click();
  cy.wait(2000);

//   cy.get('.r-1loqt21 > .r-hlyqxr > .css-11aywtz').click();


  cy.get('[class="css-901oao r-hl96vj r-13awgt0 r-jurbwo r-majxgm"]')
  .contains(Cypress.env('ALPHA_ADDRESS_TYPE_OFFICE'))
  .click({force: true},{ multiple: true });

  cy.get('[placeholder="Pilih jam tutup kantor"]').click();
  

  cy.get('[class="css-901oao r-hl96vj r-13awgt0 r-jurbwo r-majxgm"]')
  .contains('5.00 pm')
  .click({force: true},{ multiple: true });
  


  cy.get('[placeholder="Masukkan nomor HP"]').type(Cypress.env('ALPHA_PHONE_NUMBER'))

  cy.get('[placeholder="Masukan nama penerima"]').type(Cypress.env('ALPHA_NAME'))

  cy.get('[placeholder="Pilih Provinsi / Kecamatan"]').type(Cypress.env('ALPHA_PROVINCE'))
  cy.wait(2000);

  




//   cy.get('select').select(0)
//   .should('have.value', 'Kota Jambi, Kota Baru')
//   .click({force: true},{ multiple: true });

  cy.get('[class="css-901oao r-hl96vj r-1iusvr4 r-16y2uox r-1wbh5a2 r-mbap13"]')
  .contains('Kota Jambi, Kota Baru')
  .click({force: true},{ multiple: true });


  cy.get('[placeholder="Pilih Kelurahan / Kode Pos"]').type(Cypress.env('ALPHA_ZIP_CODE'))
  cy.wait(2000);


  cy.get('[class="css-1dbjc4n r-18u37iz r-edyy15 r-11vbzrn"]')
  .contains('Paal Lima')
  .click({force: true},{ multiple: true });

  cy.get('[placeholder="Masukkan alamat lengkapmu dengan nama jalan, nama perumahan/nama gedung, nomor rumah/nomor unit"]').type(Cypress.env('ALPHA_ADDRESS'))
  cy.wait(2000);

  cy.get('div')
    .contains('Tentukan Peta Lokasi')
    .click();  
    
    
    


  cy.get('[class="css-11aywtz r-cqee49 r-13awgt0 r-mbap13 r-a023e6 r-3ucsff r-i6krvg"]')
    .type(Cypress.env('ALPHA_ADDRESS_PINPOINT'))

  cy.get('[class="css-901oao r-mbap13 r-1od2jal"]')
    .contains(Cypress.env('ALPHA_ADDRESS_PINPOINT'))
    .click({force: true},{ multiple: true });


  cy.get('[class="css-901oao css-bfa6kz r-jwli3a r-ba7s3 r-a023e6 r-vw2c0b r-1vzi8xi"]')
    .contains('Pilih dan Simpan Lokasi')
    .click({force: true},{ multiple: true });
    
  cy.get('div')
    .contains('Simpan Alamat',{ timeout: 20000 })
    .click();

    cy.wait(2000)

    // cy.screenshot({ clip: { x: 20, y: 20, width: 1536, height: 700 } })
    Cypress.Screenshot.defaults({ capture: 'runner' });
  cy.screenshot('add_address_success');
    
};




describe('Checkout', () => {
  it('Checkout', () => {
    cy.addToCart();
    cy.login();
    checkout();
  });
});