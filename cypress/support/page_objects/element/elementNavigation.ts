const elementsNavigation = {
    hoverProfil:    () => cy.getElementByTestId('hvrHeaderProfile'),
    clickProfil:    () => cy.getElementByTestId('btnProfileNavbarAbout'),
    clickPesanan:   () => cy.getElementByTestId('btnProfileNavbarOrder'),
    clickUlasan:    () => cy.getElementByTestId('btnProfileNavbarReview'),
    clickAlamat:    () => cy.getElementByTestId('btnProfileNavbarAddress'),
    clickKartu:     () => cy.getElementByTestId('btnProfileNavbarCard'),
    clickKeluar:    () => cy.getElementByTestId('btnProfileNavbarLogout')
}

export default elementsNavigation;