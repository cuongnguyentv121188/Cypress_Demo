import ProductDetailsComponent from "../../models/components/ProductDetailsComponent";
import { DemoBlazeHomePageAPI } from "../../support/DemoBlazeHomePageAPI";

describe('Product Details Component Test', function() {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify Product Details', function () {
        DemoBlazeHomePageAPI.getHomePageProduct().then(apiData => {
            const randomProduct = apiData[Math.floor(Math.random() * apiData.length)]; // get random product from homepage
            const randomeProductTitle = randomProduct.title.trim().replace("\n", ""); // get title to verify
            cy.contains(randomProduct.title.trim().replace("\n", "")).click(); //select any product
            
            const productDetails = new ProductDetailsComponent();
            productDetails.getProductImg().should("be.visible");
            productDetails.getProductName().should("have.text", randomeProductTitle)
            productDetails.getProductPrice().should("contain.text", randomProduct.price)
            productDetails.getProductDescription().should("not.be.empty")
            
            //cy.wait(3000); DEBUG
        });
            
    });

});