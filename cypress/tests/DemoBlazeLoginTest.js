import DemoBlazePage from "../models/pages/DemoBlazePage";
import { DemoBlazeHomePageAPI } from "../support/DemoBlazeHomePageAPI";
import products from "./DemoBlazeHomePage_products.json"

describe ('DemoBlaze Login by using API ' , () => { //mocha framework,

    let apiProduct

    beforeEach(() => {
        cy.login('tester88', 'tester88');
        cy.visit("https://www.demoblaze.com/");
        DemoBlazeHomePageAPI.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to login by using API', () => { //use API to login
        
        cy.visit("https://www.demoblaze.com/")
        let aprProductData = apiProduct
        aprProductData = aprProductData.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`  // $ cho giống với format, $ thứ 2 là StringLiteral ${variable}
                }
        })

            //cy.log(JSON.stringify(aprProductData)); 
            // verify
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(aprProductData);
            })
        })
    })

});