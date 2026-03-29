import DemoBlazePage from "../models/pages/DemoBlazePage";
import { DemoBlazeHomePageAPI } from "../support/DemoBlazeHomePageAPI";
import products from "./DemoBlazeHomePage_products.json"

describe ('DemoBlaze Login by using API ' , () => { //mocha framework,

    let apiProduct

    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        DemoBlazeHomePageAPI.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to login by using API', () => { //use API to login
        cy.request({
            url: 'https://api.demoblaze.com/login',
            method: 'POST',
            headers: {
                contentType: "application/json"
            },
            body: {
                username: 'tester88', password: btoa('tester88') //encodebase64
            }
        }).then(res => { //set tokenp_ bằng giá trị Auth_token > verify HomePage is displayed
            const authToken = res.body.split('Auth_token: ')[1];
            cy.log(authToken)
            cy.setCookie('tokenp_', authToken)
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
});