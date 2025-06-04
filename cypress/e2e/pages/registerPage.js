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

    //Validation messages
    validationMessages = {
        firstName: 'First Name must be between 1 and 32 characters!',
        lastName: 'Last Name must be between 1 and 32 characters!',
        email: 'E-Mail Address does not appear to be valid!',
        telephone: 'Telephone must be between 3 and 32 characters!',
        password: 'Password must be between 4 and 20 characters!',
        confirmPassword: 'Password confirmation does not match password!',
        privacyPolicy: 'Warning: You must agree to the Privacy Policy!'
    };

    getFirstNameValidationMessage() {
        return cy.get('#input-firstname + .text-danger');
    }
    getLastNameValidationMessage() {
        return cy.get('#input-lastname + .text-danger');
    }
    getEmailValidationMessage() {
        return cy.get('#input-email + .text-danger');
    }
    getTelephoneValidationMessage() {
        return cy.get('#input-telephone + .text-danger');
    }
    getPasswordValidationMessage() {
        return cy.get('#input-password + .text-danger');
    }
    getConfirmPasswordValidationMessage() {
        return cy.get('#input-confirm + .text-danger');
    }
    getPrivacyPolicyValidationMessage() {
        return cy.get('');
    }

    getInputById(id) {
        return cy.get(`#${id}`);
    }
    getValidationMessageById(id) {
        return cy.get(`#${id} + .text-danger`);
    }

}
export const registerPage = new RegisterPage();