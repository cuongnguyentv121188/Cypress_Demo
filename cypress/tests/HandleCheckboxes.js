
const CHECKBOXES_SEL = "[type='checkbox']"

describe ('handling Checkboxes' ,  () => { //mocha framework
    it('should be able to select/unselect checkboxes', () => {
        cy.visit("/checkboxes")
        
        //unselect the 2nd checkbox
        cy.get(CHECKBOXES_SEL).eq(1).click()

        //verify all checkboxes are unselected
        //get all checkboxes, whether checked or unchecked, is it equal 2 (because we have 2 checkboxes)
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length", 2)

        //select one by one again
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(el => {
            cy.get(el).click({multiple: true})
        })

    });
});