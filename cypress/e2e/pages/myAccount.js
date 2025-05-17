class MyAccountPage {

    get myAccountPageTitle() {
        return cy.get('h2').contains('My Account');
    }

}
export const myAccountPage = new MyAccountPage();