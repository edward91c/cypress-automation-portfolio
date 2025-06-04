import { registerPage } from "../pages/registerPage";
import { helper } from "../../utils/helper";

describe('Registration form validations', () => {
    beforeEach(() => {
        cy.visit('https://opencart.abstracta.us/index.php?route=account/register');
        registerPage.getRegisterH1Title().should('be.visible');
    });

    it('Shows error messages when submitting the form empty', () => {
        registerPage.getContinueButton().click();
        // Validate that the error messages are displayed
        registerPage.getFirstNameValidationMessage().should('contain.text', registerPage.validationMessages.firstName);
        registerPage.getLastNameInput().next('.text-danger').should('contain.text', registerPage.validationMessages.lastName);
        registerPage.getEmailInput().next('.text-danger').should('contain.text', registerPage.validationMessages.email);
        registerPage.getTelephoneInput().next('.text-danger').should('contain.text', registerPage.validationMessages.telephone);
        registerPage.getPasswordInput().next('.text-danger').should('contain.text', registerPage.validationMessages.password);
    });
    it('Shows error messages when submitting the form with First Name empty', () => {
        const lastName = helper.generateRandomLastName();
        const email = helper.generateRandomEmail();
        const telephone = helper.generateRandomPhone();
        const password = helper.generateRandomPassword();
        // Fill the form
        registerPage.getLastNameInput().type(lastName);
        registerPage.getEmailInput().type(email);
        registerPage.getTelephoneInput().type(telephone);
        registerPage.getPasswordInput().type(password);
        registerPage.getConfirmPasswordInput().type(password);
        registerPage.getPrivacyPolicyCheckbox().check();
        registerPage.getContinueButton().click();
        //Validate that the error is displayes on the First name field
        registerPage.getFirstNameValidationMessage().should('contain.text', registerPage.validationMessages.firstName);
    });
    it('Shows error messages when submitting the form with Last Name empty', () => {
        const firstName = helper.generateRandomName();
        const email = helper.generateRandomEmail();
        const telephone = helper.generateRandomPhone();
        const password = helper.generateRandomPassword();
        // Fill the form
        registerPage.getFirstNameInput().type(firstName);
        registerPage.getEmailInput().type(email);
        registerPage.getTelephoneInput().type(telephone);
        registerPage.getPasswordInput().type(password);
        registerPage.getConfirmPasswordInput().type(password);
        registerPage.getPrivacyPolicyCheckbox().check();
        registerPage.getContinueButton().click();
        //Validate that the error is displayes on the Last name field
        registerPage.getLastNameValidationMessage().should('contain.text', registerPage.validationMessages.lastName);
    });
});