export class DemoBlazeHomePageAPI {

    static getHomePageProduct(){
        cy.intercept('/entries').as('entries') //intercept và đặt alias (tên gợi nhớ) bằng từ khóa AS
        cy.wait('@entries') //chờ alias có KẾT QUẢ hiển thị
        return cy.get('@entries')
    }


}