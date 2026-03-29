import DemoBlazePage from "../models/pages/DemoBlazePage";
import { DemoBlazeHomePageAPI } from "../support/DemoBlazeHomePageAPI";
import products from "./DemoBlazeHomePage_products.json"

describe ('DemoBlaze Home Page ' , () => { //mocha framework,

    let apiProduct;

    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        // intercept default HomePage product
        DemoBlazeHomePageAPI.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to get all card data', () => {
        
        //cy.log(JSON.stringify(response));
        let aprProductData = apiProduct.response.body.Items
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
    });
});