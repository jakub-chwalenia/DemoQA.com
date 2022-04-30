export class HomePage {

    homePageheader() {

        cy.get('#app > header > a > img')
        return this
    }

    cardSelection(cardName) {

        cy.get('#app > div > div > div.home-body > div')
            .children()
            .contains(cardName)
            .click()
        return this
    }


}

export const homePage = new HomePage()