import DemoBlazePage from "../../models/pages/DemoBlazePage";
import { DemoBlazeHomePageAPI } from "../../support/DemoBlazeHomePageAPI";
describe('HomePage Category Test', function() {

    let footerComp;
    
    beforeEach(() => {
        cy.visit('/');
        // hold on until entries are available
        DemoBlazeHomePageAPI.waitForHomePageLoaded();
    });

    function verifyCategoryFilterBy(productName){
        cy.intercept('/bycat').as('cats'); //for Category
            cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force: true}); // click on Phone Category
            cy.wait('@cats'); // chờ kết quả trả về available
            cy.request({
                method: "POST",
                url: "https://api.demoblaze.com/bycat",
                body: {
                    cat: `${productName}`
                }
            }).then(res => {
                let apiProductData = res.body.Items.map(item => {
                    return {
                        itemName: item.title.replace('\n', ''),
                        itemPrice: `$${item.price}`
                    }
                });
                //cy.log(JSON.stringify(apiProductData));
                new DemoBlazePage().getAllCardData().then(allCardData => {
                    cy.wrap('').then(() => {
                        expect(allCardData).to.be.eql(apiProductData);
                    })
                })
            })
    }

    //for (let i = 0; i < 20; i++) { //run 20 times

        //it('Should be able to filter Phone Product', () => {
            //verifyCategoryFilterBy("phone");
        //});
    //}

    //it('Should be able to filter Laptops Product', () => {
            //verifyCategoryFilterBy("notebook");
    //});

    //it('Should be able to filter Monitors Product', () => {
        //verifyCategoryFilterBy("monitor");
    //});

    const SCENARIOS = ['phone', 'notebook', 'monitor'];
    SCENARIOS.forEach(product => {
        it(`Should be able to filter ${product} product`, () => {
            verifyCategoryFilterBy(`${product}`);
        });
    })
});