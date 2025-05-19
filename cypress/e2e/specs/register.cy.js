import { registerPage } from "../pages/registerPage";
import { congratulationsPage } from "../pages/congratulationsPage";
import { helper } from "../../utils/helper";


describe('Register flow', () => {
    beforeEach(() => {
        cy.visit('/index.php?route=account/register');
        registerPage.getRegisterH1Title().should('be.visible');

    });

    it('The user successfully registered the account', () => {
        const firstName = helper.generateRandomName();
        const lastName = helper.generateRandomLastName();
        const email = helper.generateRandomEmail();
        const telephone = helper.generateRandomPhone();
        const password = helper.generateRandomPassword();
        // Fill in the registration form
        registerPage.getFirstNameInput().type(firstName);
        registerPage.getLastNameInput().type(lastName);
        registerPage.getEmailInput().type(email);
        registerPage.getTelephoneInput().type(telephone);
        registerPage.getPasswordInput().type(password);
        registerPage.getConfirmPasswordInput().type(password);
        registerPage.getPrivacyPolicyCheckbox().check();
        registerPage.getContinueButton().click();
        // Verify that the user is redirected to the success page
        cy.url().should('include', '/success');
        // Verify that the success message is displayed
        congratulationsPage.getH1Text().should('be.visible');
        congratulationsPage.getCongratulationsText().should('have.text', congratulationsPage.successMessage);
        congratulationsPage.getContinueButton().should('be.visible');
        congratulationsPage.getContinueButton().click();
        // Verify that the user is redirected to the My Account page
        // cy.origin is used because after registration the app redirects from HTTP to HTTPS, causing an origin change.
        cy.origin('https://opencart.abstracta.us',() => {
            cy.url().should('include', '/account');
        });

    });
});