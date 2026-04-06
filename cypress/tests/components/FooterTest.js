import FooterComponent from "../../models/components/FooterComponent";

describe('Footer Component Test', function() {

    let footerComp;
    
    before(() => {
        cy.visit('/');
        footerComp = new FooterComponent();
    });

    xit('Verify AboutUs Column', () => {
        const expectedAboutUsData = {
            "header":"About Us",
            "description":"We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
        };

        footerComp.getAboutUsData().then(actualAboutUsData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(actualAboutUsData))
                expect(actualAboutUsData).to.be.deep.equal(expectedAboutUsData);
                //expect(actualAboutUsData.description).to.equal(expectedAboutUsData.description);
            })
        })
    });

    it('Verify ContactUs Column', () => {
        const expectedContactUsData = {
            "header":"Get in Touch",
            "address":"Address: 2390 El Camino Real", 
            "phone": "+440 123456", 
            "email": "demo@blazemeter.com"
        }

        footerComp.getContactUsData().then(actualContactUsData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(actualContactUsData))
                //expect(actualContactUsData).to.be.deep.equal(expectedContactUsData);
                
                expect(actualContactUsData.header).to.equal(expectedContactUsData.header);
                expect(actualContactUsData.description).to.contains(expectedContactUsData.address);
                expect(actualContactUsData.description).to.contains(expectedContactUsData.phone);
                expect(actualContactUsData.description).to.contains(expectedContactUsData.email);

            })
        })
    });

});