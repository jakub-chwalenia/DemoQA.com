/// <reference types="cypress" />

import { basePage } from "../../pageObjects/basePage"
import { navBar } from "../../pageObjects/components/navBar"
import { elementsPage } from "../../pageObjects/pages/elementsPage"
import { homePage } from "../../pageObjects/pages/homePage"

describe('DemoQA: Elements', () => {

    // change to befor?
    beforeEach(() => {

        cy.OpenHomePage()

    })

    after(() => {

        basePage.logInfo('--Spec has been run--')
        
    })

    afterEach(() => {

        basePage.logInfo('--All specs have been run--')
        
    })

    it('Elements: Text Box', () => {

        const card = 'Elements'
        const group = 'Text Box'

        homePage.cardSelection(card)
        navBar.pageHeader(card)

        cy.contains('Please select an item from left to start practice').should('be.visible')

        navBar.navBarMenu(card)
        navBar.submenuSelection(group)

        navBar.pageHeader(group)
        basePage.pageAddressContains('text-box')

        navBar.submenuActiveCheck(group)

        // Elements: Text Box: Form
        elementsPage.formContainer()
        
        cy.ElementsTextBoxFormHandling()
        cy.ElementsTextBoxSummaryCheck()

    })

    it('Elements: Check Box', () => {

        const card = 'Elements'
        const group = 'Check Box'

        homePage.cardSelection(card)
        navBar.pageHeader(card)

        cy.contains('Please select an item from left to start practice').should('be.visible')

        navBar.navBarMenu(card)
        navBar.submenuSelection(group)

        navBar.pageHeader(group)
        basePage.pageAddressContains('checkbox')

        // <--selected-->

        elementsPage.checkBoxWrapper()
        
        elementsPage.expandAllButton()
        elementsPage.checkBoxTreeElements()
        elementsPage.collapseAllButton()

        cy.ElementsCheckBoxData()

    })

    it('Elements: Radio Button', () => {

        basePage.navBarMenuNavigation('Elements', 'Check Box', 'checkbox')
    })


})