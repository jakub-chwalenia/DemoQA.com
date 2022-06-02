/// <reference types="cypress" />

import { basePage } from "../../pageObjects/basePage"
import { alertsFramesWindows } from "../../pageObjects/pages/alertsPage"

describe('DemoQA: Alerts, Frames & Windows', () => {

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

    it('Forms: Browser Windows', () => {

        basePage.navBarMenuNavigation('Alerts, Frame & Windows', 'Browser Windows', 'browser-windows')

        // TODO: implement stubs (?)
        alertsFramesWindows.newTab()
        alertsFramesWindows.newWindow()
        // alertsFramesWindows.newWindowMessage()

    })
})