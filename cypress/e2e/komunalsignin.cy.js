const webUrl = 'https://user.depositobpr.id'

const signin = () => {
    cy.visit(`${webUrl}/signin`)}
    cy.get('[placeholder="Masukkan Alamat Email"]')
    .type('abellosi97@gmail.com')
 
    cy.get('[placeholder="Masukkan Kata Sandi"]')
    .type('Estevi97')

    cy.wait(100)
    cy.get('[class="btn btn-primary btn-block btn-login mb-2"]')
      .click()  
    cy.wait(1000)
    

    cy.contains('Login berhasil!')
    cy.contains('Peluang Deposito')


    describe('signin', () => {
        it('signin', () => {
        signin();
        });
        });