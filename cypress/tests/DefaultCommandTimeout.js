describe ('Exploring default commands timeout' , () => { //mocha framework, also add default commands timeout here for all
    
    //add default commands timeout 5000 for only it(0)
    // it('should be able to apply custome default timeout', () => { 
    //     //it('should be able to apply custome default timeout: 5000', {defaultCommandTimeout: 5000}, () => { 
    //     cy.visit("/login")
        
    //     //find unavailable element, default timeout:4000ms
    //     //cy.get("abc",{timeout: 10000}).type("abc") //add more time for timeout to 10000ms

    //     cy.get("#username__").type("tomsmith")
    //     cy.get("#password__").type("password")

    // });

    it('should be able to interact with list of element', () => {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get("a[href='/login']").click()
        cy.location("pathname", {timeout: 5000}).should("eq", "/aaa") 
        //check redirect page whether it has pathname that is equal /aaa in 5000ms


    });
});