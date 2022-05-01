import { navBar } from "./components/navBar"
import { homePage } from "./pages/homePage"

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

    navBarMenuNavigation(card, group, url) {
        
        homePage.cardSelection(card)
        navBar.pageHeader(card)
    
        cy.contains('Please select an item from left to start practice').should('be.visible')
    
        navBar.navBarMenu(card)
        navBar.submenuSelection(group)
    
        navBar.pageHeader(group)
        basePage.pageAddressContains(url)

        return this
    }

}

export const basePage = new BasePage()