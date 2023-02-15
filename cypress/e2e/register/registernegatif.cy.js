const webUrl = Cypress.env('ALPHA_BASE_URL');
    // start negative case : failed input email
describe('Register', () => { 

    it('failed salah masukkan input email', () => {   
    cy.visit(`${webUrl}/register`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')
    cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
    cy.getElementByTestId('inpRegisterPassword').type('123456')
    cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();   
    cy.get('div').contains('Masukkan email yang valid').should('be.visible')
    })

    it('failed tidak input email', () => {   
    cy.visit(`${webUrl}/register`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')
    cy.getElementByTestId('inpRegisterPassword').type('123456')
    cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();   
    cy.get('div').contains('Email harus diisi').should('be.visible')
    })

    it('failed email sudah terdaftar', () => {   
      cy.visit(`${webUrl}/register`)
      cy.getElementByTestId('txtRegisterTitle')
        .should('be.visible')
      cy.getElementByTestId('inpRegisterEmail').type('yuliza.chairunnisa@lemonilo.com')  
      cy.getElementByTestId('inpRegisterPassword').type('123456')
      cy.getElementByTestId('inpRegisterName').type('liza')
      cy.getElementByTestId('btnRegister').click();   
      cy.getElementByTestId('btnRegisterLoginPopup').click();   
      })

    it('failed tidak input password', () => {  
    cy.visit(`${webUrl}/register`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')
    cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
    function userID_Numeric() {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < 4; i++)
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
    cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
    //cy.getElementByTestId('inpRegisterPassword').type('123456')
    cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();
    cy.get('div').contains('Password harus diisi').should('be.visible')
    })

    it('failed input 3 digit password', () => {  
    cy.visit(`${webUrl}/register`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')
    cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
    function userID_Numeric() {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < 4; i++)
      
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
    cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
    cy.getElementByTestId('inpRegisterPassword').type('456')
    cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();
    cy.get('div').contains('Password minimal 6 karakter / maksimal 128 karakter').should('be.visible')
    })

    it('failed tidak input name', () => {  
    cy.visit(`${webUrl}/register`)
    cy.getElementByTestId('txtRegisterTitle')
      .should('be.visible')
    cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
    function userID_Numeric() {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < 4; i++)
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
    cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
    cy.getElementByTestId('inpRegisterPassword').type('123456')
    //cy.getElementByTestId('inpRegisterName').type('liza')
    cy.getElementByTestId('btnRegister').click();
    cy.get('div').contains('Nama Harus Diisi').should('be.visible')
    })      

    it('failed input nama menggunakan simbol', () => {  
      cy.visit(`${webUrl}/register`)
      cy.getElementByTestId('txtRegisterTitle')
        .should('be.visible')
      cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
      function userID_Numeric() {
      var text = "";
      var possible = "1234567890";
      for (var i = 0; i < 4; i++)
      
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
      }
      cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
      cy.getElementByTestId('inpRegisterPassword').type('123456')
      cy.getElementByTestId('inpRegisterName').type('li-')
      cy.getElementByTestId('btnRegister').click();
      cy.get('div').contains('Nama tidak menggunakan angka atau simbol').should('be.visible')
      })      
  

    it('failed input nama minimal 3 character', () => {  
      cy.visit(`${webUrl}/register`)
      cy.getElementByTestId('txtRegisterTitle')
        .should('be.visible')
      cy.getElementByTestId('inpRegisterEmail').clear().type('lizachairunnisa+' + userID_Numeric())
      function userID_Numeric() {
      var text = "";
      var possible = "1234567890";
      for (var i = 0; i < 4; i++)
      
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
      }
      cy.getElementByTestId('inpRegisterEmail').type('@gmail.com')
      cy.getElementByTestId('inpRegisterPassword').type('123456')
      cy.getElementByTestId('inpRegisterName').type('li')
      cy.getElementByTestId('btnRegister').click();
      cy.get('div').contains('Nama Lengkap minimal 3 karakter').should('be.visible')
      }) 

    it('failed register, password, dan name kosong', () => {   
      cy.visit(`${webUrl}/register`)
      cy.getElementByTestId('txtRegisterTitle')
        .should('be.visible')
      cy.getElementByTestId('btnRegister').click();   
      cy.get('div').contains('Email harus diisi').should('be.visible')
      cy.get('div').contains('Password harus diisi').should('be.visible')
      cy.get('div').contains('Nama Harus Diisi').should('be.visible')
      })

});
// case negatif 
// email harus diisi done
// email sudah terdaftar done
// password 3 digit done
// nama tidak boleh menggunakan spesial character done
// nama mininal 3 character done
// error message 3 sekaligus, kosong 3 field done