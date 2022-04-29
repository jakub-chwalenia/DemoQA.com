export class BasePage {

    pause(ms) {
        
        return cy.wait(ms)
    }

    logInfo(message) {
        
        return cy.log(message)
    }

    pageAddressContains(text) {
        
        return cy.url().should('contain', text)
    }

    pageTitleContains(title) {
        
        return cy.title().should('contain', title)
    }

    pageTitleEqualsTo(title) {
        
        return cy.title().should('eq', title)
    }

}

export const basePage = new BasePage()