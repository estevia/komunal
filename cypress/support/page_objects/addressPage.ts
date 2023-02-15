// exportnya spesifik
import { elementAddress } from "./element";

const element = {
  klikTambahAlamat: () =>{
    elementAddress.tambahAlamat().click();
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
  // selectJam:(jam) => {
  //   elementAddress.jamTutup().click();
  //   if(jam == '3.00 pm'){
  //       elementAddress.pilihJamTutup().contains('3.00 pm').click();
  //   }if(jam == '5.00 pm'){
  //       elementAddress.pilihJamTutup().contains('5.00 pm').click();
  //   }
  // },
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
      elementAddress.inputNomorHp().type(phonenumber);
  },
  typeNamaPenerima:(receivename) => {
      elementAddress.inputNamaPenerima().type(receivename);
  },
  typeProvinsi:(namaprovinsi) => {
      elementAddress.pilihProvinsi().type(namaprovinsi);
  },
  selectProvinsi:(provinsi) => {
    //listnya ambil dulu, terus pake fungsi array sama split lalu di klik
      elementAddress.inputProvinsi().contains(provinsi).click();
  },
  typeKelurahan:(namakelurahan) => {
      elementAddress.pilihKelurahan().type(namakelurahan);
      cy.wait(500);
  },
  selectKelurahan:(kelurahan) => {
      elementAddress.inputKelurahan().contains(kelurahan).click();
  },
  typeAlamat:(alamat) => {
      elementAddress.inputAlamat().type(alamat);
  },
  switchAlamatUtama:() => {
      elementAddress.alamatUtama().click({force: true});
  },
  clickSimpan:() => {
      elementAddress.simpanAlamat().click();
  },
  clickGosend:() => {
      elementAddress.lokasiGosend().click();
  },
  typeLokasi:(lokasipengiriman) => {
      elementAddress.inputLokasi().type(lokasipengiriman);
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
  expectedMainAddress: () => {
      elementAddress.passedMainAddress().contains('Alamat Utama').should('be.visible');
  },
  expectedWithMap:() => {
      elementAddress.passedWithMap().should('have.attr', 'src').and('include', 'address-latlng.png');
  },
  failedToSave:() => {
      elementAddress.failed().contains(/.* harus diisi/).should('be.visible');
  },
  invalidInput:() => {
      elementAddress.failed().contains(/.* karakter/).should('be.visible');
  },
  

}

export const addAddressPage = element

