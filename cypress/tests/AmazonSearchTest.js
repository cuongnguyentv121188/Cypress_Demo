import AmazonHomePage from "../models/pages/AmazonHomePage";
import AmazonSearchResultPage from "../models/pages/AmazonSearchResultPage";

describe ('Amazon Search ' , () => { //mocha framework,
    it('should be able to search dining table', () => {
        const SEARCH_TEXT = "dining table"
        let amzHomePage = new AmazonHomePage()

        cy.visit("https://www.amazon.ca/")
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT)
        amzHomePage.searchBtnElem.click()

        //verify the search result is not empty
        let amzSearchResultPage = new AmazonSearchResultPage()
        amzSearchResultPage.searchItemElemList.should("not.have.length", 0)

    });
});