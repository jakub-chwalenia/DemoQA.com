export class AlertsFramesWindows {

    newTab() {

        // TODO
        cy.get('button#tabButton.btn.btn-primary').should('exist')
    }

    newWindow() {

        cy.get('#windowButton').click()

        cy.on("window:alert", (str) => {

            //window:alert is the event which get fired on alert open
            expect(str).to.equal('This is a sample page');
            cy.log('Verified')

        })

        // https://demoqa.com
        // 'This is a sample page'
    }

    newWindowMessage() {

        // TODO
    }
}

export const alertsFramesWindows = new AlertsFramesWindows()