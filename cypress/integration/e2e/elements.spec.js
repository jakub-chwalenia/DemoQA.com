/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import { basePage } from "../../pageObjects/basePage"
import { navBar } from "../../pageObjects/components/navBar"
import { elementsPage } from "../../pageObjects/pages/elementsPage"
import { homePage } from "../../pageObjects/pages/homePage"

describe('DemoQA: Elements', () => {

    // change to before?
    beforeEach(() => {

        cy.OpenHomePage()

    })

    after(() => {

        basePage.logInfo('--Spec has been run--')
        
    })

    afterEach(() => {

        basePage.logInfo('--All specs have been run--')
        
    })

    it.skip('Elements: Text Box', () => {

        basePage.navBarMenuNavigation('Elements', 'Text Box', 'text-box')
        
        elementsPage.formContainer()
        
        cy.ElementsTextBoxFormHandling()
        cy.ElementsTextBoxSummaryCheck()

        elementsPage.formContainerWithin()

    })

    it.skip('Elements: Check Box', () => {

        basePage.navBarMenuNavigation('Elements', 'Check Box', 'checkbox')

        elementsPage.checkBoxWrapper()
        
        elementsPage.expandAllButton()
        elementsPage.checkBoxTreeElementsSelect('Downloads')
        elementsPage.checkboxInvoke()
        elementsPage.checkBoxTreeElementsForEach()
        elementsPage.collapseAllButton()

        cy.ElementsCheckBoxData()

    })

    it.skip('Elements: Radio Button', () => {

        basePage.navBarMenuNavigation('Elements', 'Radio Button', 'radio-button')

        elementsPage.radioButtonSection('yes')
        elementsPage.radioButtonSection('impressive')
        elementsPage.radioButtonSection('no')

    })

    it.skip('Elements: Web Tables', () => {

        basePage.navBarMenuNavigation('Elements', 'Web Tables', 'webtables')

        // TODO
        // count rows
        // verify column names
        // find empty row => for new data input
        // verify table data (based on JSON)
        // verify that data is in specific column
        // add table data (based on JSON) => dynamic window
        // delete & modify data
        // use search
        // sort table
        // work with columns by name (!)
        // findRow function

       elementsPage.webTableWrapper()

       // select numbers of rows to be displayed and count visible rows (including empty ones)
       elementsPage.webTableChangeRowsPerPageAndCount(20)

       elementsPage.webTableRows()

       elementsPage.webTableFindAnywhereInTable('Vega')

       elementsPage.webTableFindInRowAndColumn('First Name', 'Cierra', 20)
       // webTableFindInRowAndColumn(column, searchedValue, displayRowsNum)

        
    })

    // options: Double Click, Right Click, Click Me (Dynamic Click)
    it('Elements: Buttons', () => {

        basePage.navBarMenuNavigation('Elements', 'Buttons', 'buttons')

        // basic click
        elementsPage.clickButton('Double Click')

        // double click
        elementsPage.clickButton('Right Click')

        // right click
        elementsPage.clickButton('Click Me')

    })

    it('Elements: Upload and Download', () => {

        basePage.navBarMenuNavigation('Elements', 'Upload and Download', 'upload-download')

        // file upload via cypress-file-upload
        elementsPage.fileUpload('testData.json')

        // file download via cypress-downloadfile
        elementsPage.fileDownload()

    })

})