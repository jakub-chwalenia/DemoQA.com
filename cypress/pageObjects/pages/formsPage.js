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

                cy.get('#dateOfBirthInput')
                    .type('{selectall}06 Jun 2022')
                
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

                cy.get('#state').type('NCR{enter}')
                cy.get('#city').type('Gurgaon{enter}')

                cy.get('#submit').click()

                // TODO: verify that input values are GREEN + test for RED inputs
                // TODO: "Thanks for submitting the form" + data verification in modal window

            })
    }

    practiceFormBasedOnFixture() {

        // TODO
    }

}

export const formsPage = new FormsPage()