import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "./DemoBlazeHomePage_products.json"

describe ('DemoBlaze Home Page ' , () => { //mocha framework,

    it('should be able to get all card data', () => {
        
        cy.visit("https://www.demoblaze.com/")
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(products);
            })
        })

    });
});