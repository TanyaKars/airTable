import Register from "../support/page_obgects/register";
import faker from 'faker';

const register = new Register();

describe('Scenario for adding collaborator to base from the registration', () => {
    before(() => {
        cy.visit('/')
    });

    it('Should create new user, invite collaborator and ver', () => {
        let fullName = faker.name.firstName() + " " + faker.name.lastName();
        let userEmail = faker.internet.email();
        let password = faker.internet.password();

        register.registerNew(userEmail, fullName , password);
        register.baseSettings();
        register.verifyBaseCreated();
        register.shareBaseViaEmail('collaboratoremail@mail.com');
        register.collaboratorInvited('collaboratoremail@mail.com');
    });
});
