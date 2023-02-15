import { elementsNavigation } from "./element";

export const elementNav = {

    clickAlamat:() => {
        elementsNavigation.hoverProfil().trigger('mouseover', { timeout: 40000, })
        elementsNavigation.clickAlamat().click();
    }
}

