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

        elementsPage.formContainerWithin()

    })

    it('Elements: Check Box', () => {

        basePage.navBarMenuNavigation('Elements', 'Check Box', 'checkbox')

        elementsPage.checkBoxWrapper()
        
        elementsPage.expandAllButton()
        elementsPage.checkBoxTreeElementsSelect('Downloads')
        elementsPage.checkboxInvoke()
        elementsPage.checkBoxTreeElementsForEach()
        elementsPage.collapseAllButton()

        cy.ElementsCheckBoxData()


        // custom function to select checkboxes only for given element + check if selected (+ parent)
        // find checkboxes for values from JSON

    })

    it('Elements: Radio Button', () => {

        basePage.navBarMenuNavigation('Elements', 'Radio Button', 'radio-button')

        elementsPage.radioButtonSection('yes')
        elementsPage.radioButtonSection('impressive')
        elementsPage.radioButtonSection('no')

        // TODO: 'invoke' to change state of button

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