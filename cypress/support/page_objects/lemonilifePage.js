/* 
wrap element into object LemonilifePage
how to access?
just Go with -> import * as youralias from "../support/page_objects/lemonilifePage"
on top of your test
and call object by get('youralias.nameofyourelement')
happy coding and drink your water to stay hydrated :)
*/

const lemonilifePage = {
  bannerLemonilifeHomepage: '.swiper-slide-active > a > .r-lqms97',
  /*
      I try to make it clean by grouping each button based on their page
      just call it by youralias.nameofgroup.nameofelement
      example: if I want to use buttonLemonilife
      any my alias was 'x'
      I go with x.homepage.buttonLemonilife
      */
  homepage: {
    buttonArticle: ':nth-child(1) > a > .r-1awozwy',
    buttonCurhatSehat: ':nth-child(2) > a > .r-1awozwy',
    buttonLemoniloClub: ':nth-child(3) > a > .r-1awozwy',
  },
  lemoniloClub: {
    bannerLemonilife: '.r-3xd0nt > .r-1iusvr4',
    buttonLihatSemua: '.r-1wre7p > a > .css-1dbjc4n > .css-901oao',
    labelDaftarEvent: ':nth-child(1) > :nth-child(1) > .r-cqee49',
    buttonAkanDatang: '.r-l4nmg1 > .r-14lw9ot > .r-zso239',
    buttonRiwayat: '.r-14lw9ot > .r-1loqt21',
    buttonRiwayatNotSelected: '.r-14lw9ot > .r-1loqt21',
    breadCrumbDaftarEvent: ':nth-child(1) > :nth-child(1) > .r-1awozwy',
    buttonLihatEventTerbaru: '.r-1jgu3lx > .r-1awozwy',
    emptyStateEvent: '.r-ffffna > .r-1awozwy',
    cardEventHomepage: '.r-ffffna',
    namaEvent:
      ':nth-child(1) > a > .r-1yadl64 > .r-1777fci > .r-1mi0q7o > .r-cqee49',
    tanggalEvent:
      ':nth-child(1) > a > .r-1yadl64 > .r-1777fci > .r-1mi0q7o > .css-1dbjc4n > div.css-901oao > :nth-child(1)',
    waktuEvent:
      ':nth-child(1) > a > .r-1yadl64 > .r-1777fci > .r-1mi0q7o > .css-1dbjc4n > div.css-901oao > :nth-child(3)',
    namaClub: ':nth-child(1) > a > .r-1yadl64 > .r-14lw9ot',
    imageEvent: ':nth-child(1) > a > .r-1yadl64 > :nth-child(2)',
  },
  Detail: {
    namaClub: '.r-labphf > .r-14lw9ot',
    waktuEvent:
      '.r-1wre7p.r-18u37iz > .r-eqz5dr > :nth-child(1) > :nth-child(3) > .css-901oao',
    namaEvent: '.r-1wre7p.r-18u37iz > .r-eqz5dr > :nth-child(1) > .css-4rbku5',
    tanggalEvent:
      '.r-1wre7p.r-18u37iz > .r-eqz5dr > :nth-child(1) > :nth-child(2) > .css-901oao',
    buttonDaftar: '.r-ph5olw > .r-1q84i07',
    buttonShare: '.r-labphf > .r-1awozwy > .css-901oao',
  },
  formDaftar: {
    syaratDanKetentuan: '.r-1habvwh > .r-1awozwy > .css-1dbjc4n > .css-901oao',
    namaEvent: '.r-1n0xq6e > .r-cqee49',
    tanggalEvent: '.r-1n0xq6e > .css-1dbjc4n > div.css-901oao > :nth-child(1)',
    modalSNK: '.r-fbdq55',
    exitSNK: '.r-1wre7p > .r-1loqt21',
    buttonDaftar: '.r-k200y > .r-6koalj > .r-kdyh1x',
    placeholderProvince: '.r-61z16t > .r-eqz5dr > .r-1i6wzkk > .r-hlyqxr',
    selectedProvince:
      ':nth-child(1) > :nth-child(3) > .r-14lw9ot > .css-1dbjc4n',
    placeholderGender: '.r-1g40b8q > .r-ac9qta > .r-4qtqp9 > .css-1dbjc4n',
    selectedGener:
      '.r-150rngu > :nth-child(1) > :nth-child(2) > .r-1loqt21 > .css-1dbjc4n',
    checkboxSNK: '.r-1d4mawv > .css-1dbjc4n',
    answeredQuestion1: '.r-kc8jnq > :nth-child(1)',
    fieldNoTelp: '.r-ac9qta > .r-eqz5dr > .r-1i6wzkk > .r-hlyqxr',
    datePicker:
      '.react-datepicker__input-container > :nth-child(1) > .r-eqz5dr > .r-1i6wzkk > .r-hlyqxr',
    placeholderProfesi: ':nth-child(7) > .r-ac9qta > .r-4qtqp9 > .css-1dbjc4n',
    selectedProfesi:
      '.r-150rngu > :nth-child(1) > :nth-child(1) > .r-1loqt21 > .css-1dbjc4n',
  },
  articleHomepage: {
    header: '.container > :nth-child(2) > .css-4rbku5',
    searchBar: '.r-1777fci > .css-11aywtz',
    searchBarCategory: '.r-1w6e6rj > :nth-child(1) > [data-testid="btnCategoryArticle"] > :nth-child(1) > .css-1dbjc4n > .css-901oao',
    searchBarHashtag: ':nth-child(1) > .r-qku838 > a > .css-1dbjc4n > .css-901oao',
    searchResult: ':nth-child(2) > .r-1wre7p > [data-testid="btnDetailArticle"] > :nth-child(1) > .r-14lw9ot',
    hapusKeyword: '.r-1777fci > .r-1loqt21 > .css-1dbjc4n > .css-901oao',
    searchHistory: '[data-testid="btnResultArticle"] > .css-901oao',
    hapusHistory: '[data-testid="btnRemoveItemLastSeacrhArticle"] > .r-1mlwlqe > .css-9pa8cd',
    hapusSemuaHistory: '[data-testid="btnReserLastSeacrhArticle"] > .css-901oao',
    articleTerhangat: '[style="height: 359.5px;"]',
    articleTerpopuler:
      ':nth-child(2) > .r-150rngu > :nth-child(1) > :nth-child(1) > .r-1wre7p > [data-testid="btnDetailArticle"] > :nth-child(1) > .r-14lw9ot > [style="height: 359.5px;"]',
    articleStream:
      ':nth-child(4) > .r-cl51yi > [data-testid="btnDetailArticle"] > :nth-child(1) > .r-14lw9ot > [style="height: 270.667px;"]',
    arrowArticleStream: '.w-full > .r-1loqt21',
    lihatSemuaArticleStream:
      ':nth-child(1) > .container > .r-1wtj0ep > .r-ha67zf > a > .css-1dbjc4n',
    articleCategory:
      ':nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="btnCategoryArticle"] > :nth-child(1)',
    articleHashtag: ':nth-child(1) > a > :nth-child(1) > .r-1awozwy',
  },
  articleCategory: {
    header: ':nth-child(2) > .css-4rbku5',
    sortingDropdown: '.r-1yflyrw > :nth-child(2) > .r-1awozwy',
    sortingTerbaru: '.r-u0ci3n > :nth-child(1)',
    sortingTerlama: '.r-u0ci3n > :nth-child(2)',
    article: '[style="height: 359.5px;"]',
    pageNumber: '.r-18u37iz > :nth-child(4) > .css-1dbjc4n > .css-901oao',
    nextPage: ':nth-child(8) > .css-1dbjc4n > .css-901oao',
    previousPage:
      '.r-p1pxzi > .r-18u37iz > :nth-child(1) > .css-1dbjc4n > .css-901oao',
  },
  articleHashtag: {
    header: ':nth-child(2) > .css-4rbku5',
    sortingDropdown: '.r-1yflyrw > :nth-child(2) > .r-1awozwy',
    sortingTerbaru: '.r-u0ci3n > :nth-child(1)',
    sortingTerlama: '.r-u0ci3n > :nth-child(2)',
    article: '[style="height: 359.5px;"]',
    pageNumber: '.r-18u37iz > :nth-child(3) > .css-1dbjc4n > .css-901oao',
    nextPage: '.r-18u37iz > :nth-child(4) > .css-1dbjc4n > .css-901oao',
    previousPage:
      '.r-p1pxzi > .r-18u37iz > :nth-child(1) > .css-1dbjc4n > .css-901oao',
  },
  articleDetail: {
    category: '[data-testid="btnCategoryArticle"] > .css-1dbjc4n > .css-901oao',
    title: ':nth-child(2) > .css-4rbku5',
    buttonLike: '.r-jwi452 > .r-14lw9ot > :nth-child(1)',
    buttonShare: '.r-jwi452 > .r-14lw9ot > :nth-child(2)',
    buttonSimpan: '.r-jwi452 > .r-14lw9ot > :nth-child(3)',
    buttonKomentar: '.r-jwi452 > .r-14lw9ot > :nth-child(4)',
    headerPopup: '.r-lchren > .r-h1js2l',
    buttonLanjutBaca: '.r-1catd8n',
    buttonFacebook: '[aria-label="facebook"]',
    buttonTwitter: '[aria-label="twitter"]',
    buttonLinkedIn: '[aria-label="linkedin"]',
    buttonCopyLink: '.r-tmtnm0 > .r-1awozwy',
    popupLinkTersalin: '.r-6dt33c > .r-1awozwy',
    inputKomentar: '.r-1loqt21 > .css-11aywtz',
    buttonX:
      '.r-1niwhzg.r-6koalj > .r-13awgt0 > .r-14lw9ot > [style="transition-duration: 0s;"]',
    hashtag: '.r-qku838 > a > .css-1dbjc4n > .css-901oao',
    artikelTerkait:
      ':nth-child(1) > .r-1wre7p > [data-testid="btnDetailArticle"] > :nth-child(1) > .r-14lw9ot',
  },
  curhatSehatHomepage: {
    curhatSehatBreadcrumb: '.r-1yflyrw > :nth-child(5) > a > .css-1dbjc4n > .css-901oao',
    header: '.r-3xd0nt > .r-eqz5dr > .css-4rbku5',
    searchBar: '.r-1777fci > .css-11aywtz',
    hapusKeyword: '.r-1777fci > .r-1loqt21 > .css-1dbjc4n > .css-901oao',
    searchHistory: '.r-qku838 > :nth-child(1) > .css-901oao',
    hapusHistory: '.r-qku838 > :nth-child(2) > .r-1mlwlqe > .css-9pa8cd',
    hapusSemuaHistory: '.r-eektet > .r-1wtj0ep > .css-1dbjc4n > .css-901oao',
    searchResult: '[href="/life/curhat-sehat/question/sakit-kerongkongan-setelah-makan-pedas"] > .r-1wre7p',
    sortingDropdown: '.r-17s6mgv > :nth-child(3) > .r-1awozwy',
    sortingTerbaru: '.r-u0ci3n > :nth-child(1)',
    sortingTerpopuler: '.r-u0ci3n > :nth-child(2)',
    buttonTulisPertanyaan: '.r-1wv73ep > .r-1awozwy',
    filterSemuaTerjawab: '.r-1wv73ep > .r-kdyh1x > :nth-child(1)',
    filterJawabanAhli: '.r-1wv73ep > .r-kdyh1x > :nth-child(2)',
    filterButuhJawaban: '.r-1wv73ep > .r-kdyh1x > :nth-child(3)',
    question: '[href="/life/curhat-sehat/question/halo"] > .r-1wre7p',
  },
  questionDetail: {
    header: '.r-1ra0lkn',
    banner: '.r-2c5bnv > :nth-child(3) > .r-1loqt21',
    buttonAppStore: ':nth-child(2) > [href="https://apps.apple.com/us/app/lemonilo-healthy-living/id1450623533"]',
    buttonPlayStore: ':nth-child(3) > :nth-child(2) > [href="https://play.google.com/store/apps/details?id=com.lemonilo&hl=en"]',
  },
};

export default lemonilifePage;
