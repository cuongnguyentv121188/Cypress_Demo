export default class FooterComponent {
    getFooterColumns = () => cy.get('#fotcont .caption')
    getFooterColHeader = () => cy.get('h4')
    getFooterColDescription = () => cy.get('p')

    getAboutUsData(){
        let aboutUsData = {}; // an object
        this.getFooterColumns().eq(0).within(() => {
            //assign value to property header/description  of aboutUsData
            this.getFooterColHeader().then($header => aboutUsData.header = $header.text().trim());
            this.getFooterColDescription().then($des => aboutUsData.description = $des.text().replace(/\n\s+/g," ").trim());
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(aboutUsData));
        });
    }

    getContactUsData(){
        let contactUsData = {}; // an object
        this.getFooterColumns().eq(1).within(() => {
            //assign value to property header/description  of contactUsData
            this.getFooterColHeader().then($header => contactUsData.header = $header.text().trim());
            this._getMultiDesc().then(desc => contactUsData.description = desc)
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(contactUsData));
        });
    }

    _getMultiDesc(){ // mark it is a private function in this class
        let desc = "";
        this.getFooterColDescription().each($descLine => {
                desc = desc + $descLine.text().trim() + ' ';
            })
        return new Cypress.Promise(resolve => cy.wrap('').then(() => resolve(desc)))
    }

}