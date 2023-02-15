// exportnya spesifik
import { elementAddress } from "./element";

const element = {
  klikEditAlamat: () =>{
    elementAddress.editAlamat().click();
  },
  klikSetAlamatUtama: () => {
    elementAddress.setAlamatUtama().click();
  },
  selectNamaAlamat:(alamat) => {
    elementAddress.inputNamaAlamat().click();
    if(alamat == 'Alamat Tinggal'){
        elementAddress.pilihAlamat().contains('Alamat Tinggal').click();
    }
    if(alamat == 'Kantor / Toko'){
        elementAddress.pilihAlamat().contains('Kantor / Toko').click(); 
    }
  },
  selectJam: (abc) => {
    elementAddress.jamTutup().click();
    const jamTutup = ["3.00 pm","4.00 pm","5.00 pm"];
    const isSelect = (element) => element.substring(0, abc.length) == abc;
    let xyz = '';
    const indexHasil = jamTutup.findIndex(isSelect);
    if(indexHasil =>0){
      xyz = jamTutup[indexHasil];
      elementAddress.pilihJamTutup().contains(xyz).click();
    }
  },
  typeNomorHp:(phonenumber) => {
      elementAddress.inputNomorHp().clear().type(phonenumber);
  },
  clearNomorHp:() => {
    elementAddress.inputNomorHp().click().clear();
},
  typeNamaPenerima:(receivename) => {
      elementAddress.inputNamaPenerima().clear().type(receivename);
  },
  clearNamaPenerima:() => {
    elementAddress.inputNamaPenerima().clear();
},
  typeProvinsi:(namaprovinsi) => {
      elementAddress.pilihProvinsi().clear().type(namaprovinsi);
  },
  selectProvinsi:(provinsi) => {
    //listnya ambil dulu, terus pake fungsi array sama split lalu di klik
      elementAddress.inputProvinsi().contains(provinsi).click();
  },
  typeKelurahan:(namakelurahan) => {
      elementAddress.pilihKelurahan().clear().type(namakelurahan);
      cy.wait(500);
  },
  selectKelurahan:(kelurahan) => {
      elementAddress.inputKelurahan().contains(kelurahan).click();
  },
  typeAlamat:(alamat) => {
      elementAddress.inputAlamat().clear().type(alamat);
  },
  clearAlamat:() => {
    elementAddress.inputAlamat().clear();
},
  clickSimpan:() => {
      elementAddress.simpanAlamat().click();
  },
  klikUbahLokasi:() =>{
    elementAddress.ubahLokasi().click();
  },
  typeLokasi:(lokasipengiriman) => {
      elementAddress.inputLokasi().clear().type(lokasipengiriman);
      cy.wait(1000);
  },
  selectLokasi:(lokasiterpilih) => {
      elementAddress.pilihLokasi().contains(lokasiterpilih).click();
      cy.wait(1000);
  },
  clickSimpanLokasi:() => {
      cy.wait(2000);
      elementAddress.simpanLokasi().click();
  },
  expected:() => {
      elementAddress.passed().contains('Pengaturan Alamat').should('be.visible');
  },

  expectededit:() => {
    elementAddress.PilihAlamatLain().contains('Pilih Alamat Lain').should('be.visible');
},
  
  failedToSave:() => {
      elementAddress.failed().contains(/.* harus diisi/).should('be.visible');
  },
  invalidInput:() => {
      elementAddress.failed().contains(/.* karakter/).should('be.visible');
  },

  EditAddressCheckout:() => {
    elementAddress.PilihAlamatLain().should('be.visible').click({force:true});
    elementAddress.editAlamat().click();

  },

  ChangetoKantor:() => {
    elementAddress.dropdownAlamat().click();
    elementAddress.ChangetoKantor().click();

  },
  TandaiLokasi:() => {
  cy.get(':nth-child(6) > .r-14lw9ot > .r-1awozwy > .r-1loqt21').click()
  cy.wait(2000);
  cy.get('.r-1fg8wnh > .css-11aywtz').type(Cypress.env('ALPHA_HURUF_RADIT'))
  cy.wait(2000);
  cy.get('.r-150rngu > :nth-child(1) > :nth-child(3) > .css-1dbjc4n > .css-901oao').click()
  cy.wait(1000);
  cy.get('.r-4s656n > .r-1kihuf0 > .css-901oao').click()
  },
  
}

export const editAddressPage = element

