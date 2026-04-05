import HeaderComponent from "../../models/components/HeaderComponent";

describe('Header Component Test', function() {

    const BRAND_TEXT = 'PRODUCT STORE';

    
    beforeEach(() => {
        cy.visit('/')
    });

    it('Test for brand logo', () => {
        // Logo is visible and its text is not empty
        const headerComponent = new HeaderComponent();
        headerComponent.brandLogoImg().should('be.visible')
        headerComponent.brandLogo().should('contain.text', '')

    });

    it('Test for Header Menu', () => {
        // Verify header menu items in the header menu list are not empty
        const headerComponent = new HeaderComponent();
        headerComponent.headerMenuItemList().each(menuItem => {
            cy.wrap(menuItem).should('not.be.empty')
        })

    });

});