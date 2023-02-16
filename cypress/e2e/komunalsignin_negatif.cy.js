const webUrl = 'https://user.depositobpr.id'

const signin1 = () => {
    cy.visit(`${webUrl}/signin`)}
    cy.get('[placeholder="Masukkan Alamat Email"]')
    .type('abellosi97@gmail.com')
 
    cy.get('[placeholder="Masukkan Kata Sandi"]')
    .type('Estevi9999')

    cy.wait(100)
    cy.get('[class="btn btn-primary btn-block btn-login mb-2"]')
      .click()  
    cy.wait(1000)


    cy.contains('Email atau password anda salah!')


    describe('signin1', () => {
        it('signin1', () => {
        signin();
        });
        });