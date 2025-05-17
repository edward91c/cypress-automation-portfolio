class HomePage {
    visit() {
        cy.visit('/');
    }
    getTitle() {
        return cy.get('h1').contains('Your Store');
    }
}
export const homePage = new HomePage();