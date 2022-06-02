/// <reference types="cypress" />

import { basePage } from "../../pageObjects/basePage"
import { formsPage } from "../../pageObjects/pages/formsPage"

describe('DemoQA: Forms', () => {

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

    it('Forms: Practice Form', () => {

        // TODO
        basePage.navBarMenuNavigation('Forms', 'Practice Form', 'automation-practice-form')

        formsPage.practiceFormSimpleSelection('Male', 'Sports', 'sampleFile.jpeg')

    })
})