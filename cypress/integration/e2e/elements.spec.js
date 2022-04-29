/// <reference types="cypress" />

import { basePage } from "../../pageObjects/basePage"

describe('DemoQA: Elements', () => {

    beforeEach(() => {

        cy.OpenHomePage()

    })

    afterEach(() => {

        basePage.logInfo('--Spec has been run--')
        
    })

    it('Elements: Text Box', () => {

        // TODO
    })


})