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

                // TODO: to be implemented (!)
                // cy.contains('.select2-results__option', 'Clementine Bauch').should('be.visible').click()
                // // confirm Select2 widget renders the name
                // cy.get('#select2-user-container').should('have.text', 'Clementine Bauch')

                cy.get('#submit').click()

                cy.window().then(win => {

                    // TODO

                    cy.get('.modal-header').should('be.visible')

                    cy.contains('Thanks for submitting the form').should('be.visible')

                    cy.get('body > div.fade.modal.show > div > div')
                        .wait(5000)
                        .should('be.visible')
                    
                    cy.get('div.fade.modal.show > div > div > div.modal-body > div > table')
                        .should('exist')
                    
                    cy.contains('Close').click({force: true})

                })


                // TODO: verify that input values are GREEN + test for RED inputs
                // TODO: "Thanks for submitting the form" + data verification in modal window

            })
    }

    practiceFormBasedOnFixture() {

        // TODO
    }

}

export const formsPage = new FormsPage()