class MyAccountPage {

    getMyAccountHeading() {
        return cy.get('h2').contains('My Account');
    }

    getMyOrdersHeading() {
        return cy.get('h2').contains('My Orders');
    }

    getMyAffiliateAccountHeading() {
        return cy.get('h2').contains('My Affiliate Account');
    }

    getNewsletterHeading() {
        return cy.get('h2').contains('Newsletter');
    }

}
export const myAccountPage = new MyAccountPage();