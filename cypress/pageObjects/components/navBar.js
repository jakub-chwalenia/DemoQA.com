export class NavBar {

    pageHeader(elementName) {
        
        cy.get('[class="pattern-backgound playgound-header"]')
            .children()
            .contains(elementName)
        return this
    }

    // side navbar elements:

    navBarMenu(elementName) {

        cy.get('.left-pannel')
            .children()
            .contains(elementName)
        return this
    }

    submenuSelection(submenu) {

        cy.get('[class="element-list collapse show"]')
            .children()
            .contains(submenu)
            .should('be.visible')
            .click({force: true})
        return this
    }

    submenuActiveCheck(submenu) {

        cy.get('[class="btn btn-light active"]')
            .children()
            .contains(submenu)
        return this
    }

}

export const navBar = new NavBar()