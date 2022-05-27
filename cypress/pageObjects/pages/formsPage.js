export class FormsPage {

    practiceForm(gender, hobby) {

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
                cy.get('#dateOfBirthInput').type('06 Jun 2022')
                cy.get('#subjectsContainer').type('Maths{enter}')

                cy.get('#hobbies-checkbox-1')
                cy.get('#hobbiesWrapper > div > div')
                    .children()
                    .contains(hobby)    

                // cy.get('#gender-radio-1')
            })
    }

}

export const formsPage = new FormsPage()