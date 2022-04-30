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
            .type(userEmail)
        return this
    }

    currentAddress(currentAddress) {

        cy.get('#currentAddress')
            .should('have.attr', 'placeholder')
            .and('equal', 'Current Address')
            .type(currentAddress)
        return this
    }

    permanentAddress(permanentAddress) {

        cy.get('#permanentAddress')
            .should('not.have.attr', 'placeholder')
            .type(permanentAddress)
        return this
    }

    submitButton() {

        cy.get('#submit').click()
        cy.get('#userEmail')
            .should('not.have.css', 'field-error')
        return this
    }

    formSummaryCheck(fullName, userEmail, currentAddress, permanentAddress) {

        cy.get('#output')
            .should('be.visible')
            .children()
            .should('have.text', fullName)
            .should('have.text', userEmail)
            .should('have.text', currentAddress)
            .should('have.text', permanentAddress)
        return this
    }

    textBoxFormInput() {

        cy.fixture('textBoxFormData.json').then( credentials => {
      
            elementsPage.fullName(credentials.fullName)
            elementsPage.userEmail(credentials.email)
            elementsPage.currentAddress(credentials.currentAddress)
            elementsPage.permanentAddress(credentials.permanentAddress)
            elementsPage.submitButton()
            
        })

        return this
    }

}

export const elementsPage = new ElementsPage()