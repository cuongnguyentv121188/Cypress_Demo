export default class HeaderComponent {
    brandLogo = () => cy.get('#nava')
    brandLogoImg = () => cy.get('#nava img')
    headerMenuItemList = () => cy.get('.nav-item')
}