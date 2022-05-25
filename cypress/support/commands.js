// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { basePage } from "../pageObjects/basePage"
import { navBar } from "../pageObjects/components/navBar"
import { elementsPage } from "../pageObjects/pages/elementsPage"
import { homePage } from "../pageObjects/pages/homePage"
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('OpenHomePage', () => {
    
    cy.visit('/')
    cy.url({ log: true})
    basePage.pageAddressContains('demoqa.com') // TODO env variable
    basePage.pageTitleContains('ToolsQA')    
    basePage.logInfo('--DemoQA main page--')

})

Cypress.Commands.add('ElementsTextBoxFormHandling', () => {

    cy.fixture('textBoxFormData.json').then( credentials => {
      
        elementsPage.fullName(credentials.fullName, {force: true})
        elementsPage.userEmail(credentials.email)
        elementsPage.currentAddress(credentials.currentAddress)
        elementsPage.permanentAddress(credentials.permanentAddress)
        elementsPage.submitButton()

    basePage.logInfo('--Text Box form submitted--')
        
    })
})

Cypress.Commands.add('ElementsTextBoxSummaryCheck', () => {

    cy.fixture('textBoxFormData.json').then( credentials => {
        
        cy.get('#output')
            .should('be.visible')
            .children()
            .should('contain.text', credentials.fullName)
            .should('contain.text', credentials.email)
            .should('contain.text', credentials.currentAddress)
            .should('contain.text', credentials.permanentAddress)

    basePage.logInfo('--Text Box summary checked--')

    })
})

// TODO: command to save all elements to JSON file, expand / collapse selected only checkboxes
// main groups: Desktop / Documents / Downloads
// "You have selected: ..."

Cypress.Commands.add('ElementsCheckBoxData', () => {

    // TODO
    cy.fixture('checkBoxData.json').then( data => {
        
        cy.log(data)
    })
})

//