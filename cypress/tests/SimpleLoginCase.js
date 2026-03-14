describe ('Element interaction' ,  () => { //mocha framework
    it('should be able to complete the form', () => {
        cy.visit("/login")
        
        //find username by ID + input text
        cy.get("#username").type("tomsmith")

        //find password by attribute + input text
        cy.get("[name='password']").type("SuperSecretPassword!")

        //find btn login by attribute + click
        cy.get("button[type='submit']").click()

        //DEBUG
        cy.wait(3000)


    });
});