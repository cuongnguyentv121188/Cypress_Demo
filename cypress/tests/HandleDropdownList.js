const DROPDOWN_SEL = "select[id='dropdown']"

describe ('handling dropdown list' ,  () => { //mocha framework
    it('should be able to select/unselect dropdown list', () => {
        cy.visit("/dropdown")
        
        //select by index, opt 1
        cy.get(DROPDOWN_SEL).select(1)

        //select by value, opt 2
        cy.get(DROPDOWN_SEL).select("2")

        //select by visible text, opt 1
        cy.get(DROPDOWN_SEL).select("Option 1")

        //verify the selected opt, opt 1
        //find a SELECT tag, get the option that is SELECTED, invoke a Jquery function to get its TEXT and check it is EQUAL Option 1
        cy.get("select option:selected").invoke("text").should("eq", "Option 1")

    });
});