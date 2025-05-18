class RegisterPage {

    getRegisterH1Title() {
        return cy.get('h1').contains('Account');
    }
    getFirstNameInput() {
        return cy.get('#input-firstname');
    }
    getLastNameInput() {
        return cy.get('#input-lastname');
    }
    getEmailInput() {
        return cy.get('#input-email');
    }
    getTelephoneInput() {
        return cy.get('#input-telephone');
    }
    getPasswordInput() {
        return cy.get('#input-password');
    }
    getConfirmPasswordInput() {
        return cy.get('#input-confirm');
    }
    getPrivacyPolicyCheckbox() {
        return cy.get('[type="checkbox"]');
    }
    getContinueButton() {
        return cy.get('input[type="submit"][value="Continue"]');
    }
    

}
export const registerPage = new RegisterPage();