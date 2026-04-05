import HeaderComponent from "../../models/components/HeaderComponent";

describe('Header Component Test', function() {

    const BRAND_TEXT = 'PRODUCT STORE';
    let headerComp;
    
    before(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
    });

    xit('Test for brand logo', () => {
        // Logo is visible and its text is not empty
    
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)

    });

    it('Test for Header Menu', () => {
        // Verify header menu items in the header menu list are not empty
        // const headerComponent = new HeaderComponent();
        // headerComponent.headerMenuItemList().each(menuItem => {
        //     cy.wrap(menuItem).should('not.be.empty')
        // })
        const expectedMenuDetail = [
            {"text":"Home (current)",
                "href":"index.html"
            },
            {"text":"Contact",
                "href":"#"
            },
            {"text":"About us",
                "href":"#"
            },
            {"text":"Cart",
                "href":"cart.html"
            },
            {"text":"Log in",
                "href":"#"
            },
            {"text":"Sign up",
                "href":"#"
            }];

        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                expect(actualMenuDetails).to.be.deep.equal(expectedMenuDetail);
            })
        })
       
    });

});