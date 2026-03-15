describe ('Multiple Elements matching interaction' ,  () => { //mocha framework
    it('should be able to interact with list of element', () => {
        cy.visit("/login")

        //find element by tag name + eq (~index)
        // cy.get("input").eq(0).type("tomsmith")
        // cy.get("input").eq(1).type("SuperSecretPassword!")

        // // use closure
        // cy.get("input").then(el => {
        //     cy.get(el[0]).clear()
        //     cy.get(el[0]).type("tomsmith")

        //     cy.get(el[1]).clear()
        //     cy.get(el[1]).type("SuperSecretPassword!")
        // })

        // Use .each
        cy.get("input").each((el, index) => {
            cy.get(el).type("something") //all fields are typed: something
        })

        cy.get("button[type='submit']").click()


        //debug
        cy.wait(3000)

    });
});