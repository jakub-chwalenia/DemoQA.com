export class FormsPage {

    practiceFormSimpleSelection(gender, hobby, file) {

        cy.contains('Student Registration Form').should('be.visible')
        cy.get('div.practice-form-wrapper')
            .within(($form) => {

                cy.get('#firstName').type('James')
                cy.get('#lastName').type('MaceKubu')
                cy.get('#genterWrapper')
                    .within(($radiobuttons) => {

                        cy.get(`[value="${gender}"]`).check({force: true})

                    })

                cy.get('#userNumber').type('5559875431')
                //cy.get('#dateOfBirthInput')
                    //.invoke('attr', 'value', '')
                    //.should('have.attr', 'value', '')
                    //.invoke('setAttr', 'value')
                    //.type('06 Jun 2022') // TODO: placeholder attr => remove? / selection via date picker

                cy.get('#dateOfBirthInput')
                    //.removeAttr('value')
                    //.type('{selectall}{backspace}')
                    .type('{selectall}06 Jun 2022')
                
                //cy.get('#dateOfBirthInput').type('06 Jun 2022')
                
                cy.get('#subjectsContainer').type('Maths{enter}')

                cy.get('#hobbies-checkbox-1').should('exist')
                // TODO: multiple selection (!)
                cy.get('#hobbiesWrapper > div > div')
                    .children()
                    .contains(hobby)
                    .prev()
                    .check({force: true})
                    .should('have.attr', 'type')
                    .and('equal', 'checkbox')

                cy.get('#uploadPicture').attachFile(file)

                cy.get('#currentAddress').type('Random Address')

                cy.get('#state').select('NCR')
                cy.get('#city').select('Gurgaon')

                cy.get('#submit').click()

                // TODO: verify that input values are GREEN + test for RED inputs

            })
    }

    practiceFormBasedOnFixture() {

        // TODO
    }

}

export const formsPage = new FormsPage()