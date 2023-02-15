import { addAddressPage } from "../../../../support/page_objects/addressPage";
import { elementNav as navigateTo } from "../../../../support/page_objects/navigationPage";
import { editAddressPage } from "../../../../support/page_objects/editaddresspage";


const webUrl = Cypress.env('ALPHA_BASE_URL');
const email = Cypress.env('ALPHA_LOGIN_USERNAME_RADIT');
const password = Cypress.env('ALPHA_LOGIN_PASSWORD_RADIT');

function nomorHp() {
  var text = "";
  var possible = "1234567890";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



function namaProfile() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function minNomorHp() {
  var text = "";
  var possible = "1234567890";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function minNamaProfile() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function minAlamatPenerima() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function maksNomorHp() {
  var text = "";
  var possible = "1234567890";

  for (var i = 0; i < 14; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

describe('Edit address with both positive & negative case', () => {

  beforeEach(function() {
    //NAVIGATE TO ALPHA PRODUCT URL & ADD TO CART
    cy.addToCart(webUrl);
    //LOGIN
    cy.doLogin(email,password);
    cy.wait(5000);
    //CHECKOUT
    cy.cartdetail(webUrl);
    //CLICK "Pilih Alamat Lain"
    editAddressPage.EditAddressCheckout();
  })

  it('Case Positif 1 = Ubah Alamat Tinggal', () => {
    editAddressPage.selectNamaAlamat('Alamat Tinggal');
    editAddressPage.clickSimpan();
    editAddressPage.expectededit();
})


  it('Case Positif 2 = Ubah All Field', () => {
  editAddressPage.selectNamaAlamat('Kantor / Toko');
  editAddressPage.selectJam('3.00 pm');
  editAddressPage.typeNomorHp(nomorHp());
  editAddressPage.typeNamaPenerima(namaProfile());
  editAddressPage.typeProvinsi('Tanah Abang');
  editAddressPage.selectProvinsi('DKI Jakarta, Kota Jakarta Pusat, Tanah Abang');
  editAddressPage.typeKelurahan('Bendungan Hilir');
  editAddressPage.selectKelurahan('Bendungan Hilir, 10210');
  editAddressPage.typeAlamat('Jalan Manasaja no 10');
  editAddressPage.TandaiLokasi();
  editAddressPage.clickSimpan();
  editAddressPage.expectededit();
}) 

  it('Case Negatif 1 = Cek Field Mandatory (Alamat Kantor)', () => {
    editAddressPage.selectNamaAlamat('Alamat Tinggal');
    editAddressPage.ChangetoKantor();
    editAddressPage.clickSimpan();
    editAddressPage.failedToSave();
})
  it('Case Negatif 2 = Cek Field Mandatory (Nomor HP, Nama penerima, Alamat Penerima)', () => {
    editAddressPage.clearNomorHp();
    editAddressPage.clearNamaPenerima();
    editAddressPage.clearAlamat();
    editAddressPage.clickSimpan();
    editAddressPage.failedToSave();
})

  it('Case Negatif 3 = Cek Minimal Karakter Field (Nomor HP, Nama, Alamat Penerima)', () => {
    editAddressPage.typeNomorHp(minNomorHp());
    editAddressPage.typeNamaPenerima(minNamaProfile());
    editAddressPage.typeAlamat(minAlamatPenerima())
    editAddressPage.clickSimpan();
    editAddressPage.invalidInput();
})

  it('Case Negatif 4 = Cek Maksimal Karakter Field (Nomor HP)', () => {
    editAddressPage.typeNomorHp(maksNomorHp());
    editAddressPage.clickSimpan();
    editAddressPage.invalidInput();
})


});