const elementsAddress = {
    setAlamatUtama:() => cy.contains('Jadikan Alamat Utama'),
    tambahAlamat: () => cy.get('.r-jh02sp').contains('Tambah Alamat Baru'),
    editAlamat:() => cy.get(':nth-child(1) > .r-4s656n > .r-1g7fiml > :nth-child(2) > .r-1loqt21 > .r-1awozwy > .css-901oao'),
    inputNamaAlamat: () => cy.get('[placeholder="Pilih nama alamat"]'),
    pilihAlamat: () => cy.get('.css-901oao'),
    jamTutup: () => cy.get('[placeholder="Pilih jam tutup kantor"]'),
    pilihJamTutup: () => cy.get('.css-901oao'),
    inputNomorHp: () => cy.get('[placeholder="Masukkan nomor HP"]'),
    inputNamaPenerima: () => cy.get('[placeholder="Masukan nama penerima"]'),
    pilihProvinsi: () => cy.get('[placeholder="Pilih Provinsi / Kecamatan"]'),
    inputProvinsi: () => cy.get('.css-1dbjc4n'),
    pilihKelurahan: () => cy.get('[placeholder="Pilih Kelurahan / Kode Pos"]'),
    inputKelurahan: () => cy.get('.css-1dbjc4n'),
    inputAlamat: () => cy.get('[placeholder="Masukkan alamat lengkapmu dengan nama jalan, nama perumahan/nama gedung, nomor rumah/nomor unit"]'),
    alamatUtama: () => cy.get('.r-1fg8wnh > .r-1loqt21'),
    lokasiGosend: () => cy.get('.css-901oao').contains('Tentukan Peta Lokasi'),
    ubahLokasi: () => cy.get('[class="css-1dbjc4n r-1awozwy r-18u37iz"]'),
    inputLokasi: () => cy.get('.r-1fg8wnh > .css-11aywtz'),
    pilihLokasi: () => cy.get('.css-901oao'),
    simpanLokasi: () => cy.get('.r-4s656n > .r-1kihuf0').contains('Pilih dan Simpan Lokasi'),
    simpanAlamat: () => cy.get('.r-1unineu > .r-1rgl43a').contains('Simpan Alamat'),
    passed: () => cy.get('.r-1eys7hf'),
    passedMainAddress:  () => cy.get('.css-901oao'),
    passedWithMap: () => cy.get('.r-173mn98').find('img'),
    failed: () => cy.get('.css-901oao'),
    PilihAlamatLain: () => cy.get('div').contains('Pilih Alamat Lain'),
    UbahAlamat: () => cy.get('.r-1loqt21 > .r-1awozwy > .css-901oao'),
    ChangetoKantor: () => cy.get('.r-14lw9ot > .r-150rngu > :nth-child(1) > :nth-child(2) > :nth-child(1) > .css-1dbjc4n > .css-901oao'),
    dropdownAlamat: () =>     cy.get('.r-1loqt21 > .r-hlyqxr > .css-901oao')


    

}

export default elementsAddress;