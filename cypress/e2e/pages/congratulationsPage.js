class CongratulationsPage {
    successMessage = 'Congratulations! Your new account has been successfully created!';

    getH1Text() {
        return cy.get('h1').contains('Account');
    }

    getCongratulationsText() {
        return cy.get('#content > p').first().should('have.text', this.successMessage);
    }
    getContinueButton() {
        return cy.get('.pull-right > .btn');
    }


}
export const congratulationsPage = new CongratulationsPage();