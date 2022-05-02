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

        basePage.navBarMenuNavigation('Elements', 'Text Box', 'text-box')
        
        elementsPage.formContainer()
        
        cy.ElementsTextBoxFormHandling()
        cy.ElementsTextBoxSummaryCheck()

    })

    it('Elements: Check Box', () => {

        basePage.navBarMenuNavigation('Elements', 'Check Box', 'checkbox')

        elementsPage.checkBoxWrapper()
        
        elementsPage.expandAllButton()
        elementsPage.checkBoxTreeElements()
        elementsPage.collapseAllButton()

        cy.ElementsCheckBoxData()

    })

    it('Elements: Radio Button', () => {

        basePage.navBarMenuNavigation('Elements', 'Radio Button', 'radio-button')

        elementsPage.radioButtonSection('yes')
        elementsPage.radioButtonSection('impressive')
        elementsPage.radioButtonSection('no')

    })

    it('Elements: Web Tables', () => {

        // TODO
        // count rows
        // verify table data
        // add table data
        // delete & modify data
        // use search
        // change number of rows displayed
        // sort table
        // work with columns by name (!)
        
    })


})