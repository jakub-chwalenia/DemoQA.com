export class ElementsPage {

    // Elements: Text Box ==========>

    formContainer() {

        cy.get('.text-field-container').should('be.visible')
        cy.get('#userName').should('be.visible')
        cy.get('#userEmail').should('be.visible')
        cy.get('#currentAddress').should('be.visible')
        cy.get('#permanentAddress').should('be.visible')
        return this
    }

    // TODO: input based on arguments
    formContainerWithin() {

        cy.get('.text-field-container')
            .within(($form) => {

                cy.get('#userName').should('be.visible')
                    .clear()
                    .type()
                cy.get('#userEmail').should('be.visible')
                cy.get('#currentAddress').should('be.visible')
                cy.get('#permanentAddress').should('be.visible')
            })
    }

    fullName(userName) {

        cy.get('#userName')
            .type(userName, {force: true})
            .should('have.attr', 'placeholder')
            .and('equal', 'Full Name')
        return this
    }

    userEmail(userEmail) {

        cy.get('#userEmail')
            .should('have.attr', 'placeholder')
            .and('equal', 'name@example.com')
        cy.get('#userEmail')
            .type(userEmail, {force: true})
        return this
    }

    currentAddress(currentAddress) {

        cy.get('#currentAddress')
            .should('have.attr', 'placeholder')
            .and('equal', 'Current Address')
        cy.get('#currentAddress')
            .type(currentAddress, {force: true})
        return this
    }

    permanentAddress(permanentAddress) {

        cy.get('#permanentAddress')
            .should('not.have.attr', 'placeholder')
        cy.get('#permanentAddress')
            .type(permanentAddress, {force: true})
        return this
    }

    submitButton() {

        cy.get('#submit').click()
        cy.get('#userEmail')
            .should('not.have.css', 'field-error')
        return this
    }

    // Elements: Check Box ==========>

    checkBoxWrapper() {

        cy.get('.check-box-tree-wrapper')
            .should('be.visible')
        return this
    }

    // TODO: add "forEach"
    // TODO: array as argument for function?
    // TODO: check what was selected and what should have been selected based on external JSON?
    checkBoxTreeElementsForEach() {

        const toBeCheckboxed = ['Desktop', 'WorkSpace', 'Downloads']
        
        for (let i = 0; i < toBeCheckboxed.length; i++) {

            cy.get('.rct-node')
                .children()
                .contains(toBeCheckboxed[i])
                .parent()
                .find('[type="checkbox"]')
                .check({force: true})

            cy.contains('You have selected')
                .parent()
                .children()
                .contains(toBeCheckboxed[i].toLowerCase())

        }

        return this
    }

    //TODO: make more dynamic => selection based on argument
    checkBoxTreeElementsSelect(checkboxItem) {

        cy.get('.rct-node')
            .children()
            .contains(checkboxItem)
            .parent()
            .find('[type="checkbox"]')
            .check({force: true})
            .parent()

        cy.contains('You have selected')
            .parent()
            .children()
            .contains(checkboxItem.toLowerCase())
        
        return this
    }

    // invoke() => invoke() works, but doesn't change checkbox state
    checkboxInvoke() {

        cy.get('#tree-node')
            .within(($checkBoxTreeNode) => {

                cy.contains('React')
                    .parent()
                    .children()
                    .find('.rct-checkbox')
                    .children()
                    .invoke('attr', 'class', 'rct-icon rct-icon-check')
                    .should('have.attr', 'class', 'rct-icon rct-icon-check')
            })
        
        return this
    }

    expandAllButton() {

        cy.get('button.rct-option.rct-option-expand-all').click()
        cy.get('[class="rct-node rct-node-parent rct-node-expanded"]')
            .should('exist')
        return this
    }

    collapseAllButton() {

        cy.get('button.rct-option.rct-option-collapse-all').click()
        return this
    }

    // Elements: Radio Button: options: yes, impressive or no ==========>

    radioButtonSection(radioValue) {

        cy.contains('Do you like the site?')
            .parent()
            .children()
            .find(`#${radioValue}Radio`)
            .check({force: true})
            .then(() => {

                if(radioValue !== 'no') {
                    
                    const capitalizedRadio = radioValue.charAt(0).toUpperCase() + radioValue.substring(1)
                    cy.contains(`You have selected ${capitalizedRadio}`)
                        .should('be.visible')
                } else {

                    cy.contains(`You have selected ${radioValue.charAt(0).toUpperCase()}` + radioValue.substring(1))
                        .should('not.exist')
                }
            })

        return this
    }

    // Elements: Web Tables ==========>

    webTableWrapper() {

        cy.get('.web-tables-wrapper')
            .should('be.visible')
        return this
    }

    webTableChangeRowsPerPageAndCount(displayRowsNum) {

        cy.get('[aria-label="rows per page"]')
            .should('be.visible')
            .select(`${displayRowsNum} rows`, { force: true })

        cy.get('.rt-table')
            .should('be.visible')
            .find('.rt-tbody')
            .children('div[role="rowgroup"]')
            .its('length')
            .should('eq', displayRowsNum)
        return this
    }

    webTableRows() {

        cy.get('div.rt-table > div.rt-tbody > div > div.rt-tr')
            .should('be.visible')
        return this
    }

    // find value anywhere in the table
    webTableFindAnywhereInTable(findValue) {

        cy.get('div.rt-table > div.rt-tbody')
            .contains('div.rt-tr', findValue)
        return this
    }

<<<<<<< HEAD
    // find value value in specific column, return row number
    webTableFindInRowAndColumn(column, searchedValue) {
=======
    // find value value in specific column
    webTableFindInRowAndColumn(column, searchedValue, displayRowsNum) {
>>>>>>> 5b23d81b7327f2ae3b13c73783048674224fe684

        // grab entire table, grab columns, grab all rows, parent? children?

        // div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(2)
        // first nth-child => row, second nth-child => column (!)

        elementsPage.webTableChangeRowsPerPageAndCount(displayRowsNum)

        cy.get('div.rt-table > div.rt-thead.-header > div.rt-tr')
            .children()
            .then(($els) => {

                const columnText = Array.from($els, el => el.innerText)
                console.log(columnText)
                const colIndex = columnText.indexOf(column)
                console.log('column index is: ' + colIndex)
                
                // column index (colIndex) => always + 1 since there is no nth-child(0)
                cy.get(`div.rt-table > div.rt-thead.-header > div > div:nth-child(${colIndex + 1})`)
                    .should('contain', column)
                // return colIndex

            }).then( (colIndex) => {

                for (let row = 1; row < displayRowsNum; row++) {

                    cy.get(`div.rt-table > div.rt-tbody > div:nth-child(${row}) > div > div:nth-child(${colIndex + 1})`)
                        .should('contain', searchedValue)
                    console.log(row)
                    return row
    
                }

            })
        
        return this
    }

    // return row and column in which searched value was found => actions based on this (?)

}

export const elementsPage = new ElementsPage()