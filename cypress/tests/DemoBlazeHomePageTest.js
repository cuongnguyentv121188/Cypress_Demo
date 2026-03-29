import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "./DemoBlazeHomePage_products.json"

describe ('DemoBlaze Home Page ' , () => { //mocha framework,

    xit('should be able to get all card data', () => {
        
        cy.visit("https://www.demoblaze.com/")
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(products);
            })
        })

    });

    it('should be able to get all card data', () => {
        
        cy.visit("https://www.demoblaze.com/");

        // intercept default HomePage product
        cy.intercept('/entries').as('entries') //intercept và đặt alias (tên gợi nhớ) bằng từ khóa AS
        cy.wait('@entries') //chờ alias có KẾT QUẢ hiển thị
        cy.get('@entries').then(entries => {
            let aprProductData = entries.response.body.Items
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