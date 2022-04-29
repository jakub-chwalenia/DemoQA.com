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

Cypress.Commands.add('OpenHomePage', () => {
    
    cy.visit('/')
    cy.url({ log: true})
    basePage.pageAddressContains('demoqa.com') // TODO env variable
    basePage.pageTitleContains('ToolsQA')    
    basePage.logInfo('--DemoQA main page--')
})    
