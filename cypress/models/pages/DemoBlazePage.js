export default class DemoBlazePage {

     // scenario in this case:  get 1 list các card component: getAllCardData() > top down nó xuống (within) > lấy từng cái 1 card trong list (each): _getCardDetails() > reuse lại card element (title, price)


    _getCardDetails(){
        let cardData = {}; // object
        cy.get('h4').then($title => cardData.itemName = $title.text().trim()) //lấy title, gán nó cho itemName property của cardData
        cy.get('h5').then($price => cardData.itemPrice = $price.text().trim())
        return new Cypress.Promise(resolve => resolve(cardData)) // return thẳng 1 Promise resolve, không cần wrap, nó chỉ là object
    }

   
    getAllCardData(){ //return array of card data
        let allCardData = []; //list
        cy.get('.card').each($card => { //lấy từng cái card by jquey $car nên không thể within từng cái $card này, nên phải wrap lại
            cy.wrap($card).within(() => {  // trong list all card
                this._getCardDetails().then(cardData => allCardData.push(cardData)) //trong THEN trả về cardData > add từng cardData vào list
            }) 
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allCardData))
            
        })
    }

}