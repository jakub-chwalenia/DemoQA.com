export class ElementsPage {

    formContainer() {

        cy.get('.text-field-container').should('be.visible')
        cy.get('#userName').should('be.visible')
        cy.get('#userEmail').should('be.visible')
        cy.get('#currentAddress').should('be.visible')
        cy.get('#permanentAddress').should('be.visible')
        return this
    }

    fullName(userName) {

        cy.get('#userName')
            .type(userName, {force: true})
            .should('have.attr', 'placeholder')
            .and('equal', 'Full Name')
        return this
    }

    userEmail(userEmail) {

        cy.get('#userEmail')
            .should('have.attr', 'placeholder')
            .and('equal', 'name@example.com')
        cy.get('#userEmail')
            .type(userEmail, {force: true})
        return this
    }

    currentAddress(currentAddress) {

        cy.get('#currentAddress')
            .should('have.attr', 'placeholder')
            .and('equal', 'Current Address')
        cy.get('#currentAddress')
            .type(currentAddress, {force: true})
        return this
    }

    permanentAddress(permanentAddress) {

        cy.get('#permanentAddress')
            .should('not.have.attr', 'placeholder')
        cy.get('#permanentAddress')
            .type(permanentAddress, {force: true})
        return this
    }

    submitButton() {

        cy.get('#submit').click()
        cy.get('#userEmail')
            .should('not.have.css', 'field-error')
        return this
    }

    checkBoxWrapper() {

        cy.get('.check-box-tree-wrapper')
            .should('be.visible')
        return this
    }

    checkBoxTreeElements() {

        cy.get('[class="rct-node rct-node-parent rct-node-expanded"]')
            .children()
        cy.get('#tree-node > ol > li > ol')
            .children()
        cy.get('.rct-node')
            .children()
        return this
    }

    expandAllButton() {

        //TODO
        cy.get('button.rct-option.rct-option-expand-all').click()
        return this
    }

    collapseAllButton() {

        cy.get('button.rct-option.rct-option-collapse-all').click()
        return this
    }

}

export const elementsPage = new ElementsPage()