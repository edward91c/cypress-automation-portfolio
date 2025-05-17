import { faker } from "@faker-js/faker";
class Helper {

    // Function to generate a random data
    generateRandomEmail() {
        const now = Date.now();
        return "fallaperoesfeature" + "+" + now + "@gmail.com";
    }
    generateRandomName() {
        const firstName = faker.person.firstName();
        return firstName;
    }
    generateRandomLastName() {
        const lastName = faker.person.lastName();
        return lastName;
    }
    generateRandomPhone() {
        const phone = faker.phone.number("+1(###)###-####");
        return phone;
    }
    generateRandomPassword() {
        const password = faker.internet.password(10);
        return password;
    }

}

export const helper = new Helper();