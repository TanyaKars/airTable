export default class Register {
    //BUTTONS
    signUpRorFree = () => cy.xpath('//nav//a[@href=\'https://airtable.com/signup\']');
    continueButtonEmail = () => cy.get('.continueButtonEmail');
    continueButtonPassword = () => cy.get('[type=\'submit\']');
    itAndSupport = () => cy.xpath('//span[contains(text(),\'IT & Support\')]');
    continueTeam = () => cy.get('[tabindex=\'10\']');
    skipCollaborator = () => cy.get('.self-end [role]');
    skipImport = () => cy.get('.flex.items-center.justify-between.mt3 [role=\'button\']');
    createBase = () => cy.get('.ml2 > :nth-child(1) > .mb1');
    share = () => cy.xpath('//span[contains(text(),\'Share\')]');
    addCollaborators = () => cy.get('.col-6');
    sendInvite = () => cy.xpath('//div[contains(text(),\'Send invite\')]');

    //FIELDS
    email = () => cy.get('#emailSignup');
    fullName = () => cy.get('input[name=\'fullName\']');
    password = () => cy.get('input[name=\'password\']');
    collaboratorEmailField = () => cy.get('[placeholder=\'Invite more base collaborators via email\']');

    //DROPDOWN
    accessToBase = () => cy.get(':nth-child(2) > .selectMenu > .focus-container > .items-center > .flex-auto');
    collaboratorRoles = () => cy.get('.flex.flex-auto.items-center.justify-center.rounded.button-stroked1');
    baseName = () => cy.contains('Untitled Base');
    nameColumn = () => cy.get('.headerAndDataRowContainer > .leftPaneWrapper');

    //TEXT
    selectEditor = () => cy.xpath('//div[contains(text(),\'Editor\')]');
    collaboratorEmail = () => cy.get('.quiet.truncate.small');

    registerNew (email, name, password) {
        this.signUpRorFree().click();
        this.email().type(email);
        this.continueButtonEmail().click();
        this.fullName().type(name);
        this.password().type(password);
        this.continueButtonPassword().click();
    };

    baseSettings() {
        this.itAndSupport().click();
        this.continueTeam().click();
        this.skipCollaborator().click();
        this.skipImport().click();
        this.createBase().click();
        cy.contains('No thanks', {timeout: 10000})
            .should('exist')
            .click();
    };

    verifyBaseCreated() {
        this.nameColumn().click();
        this.baseName().should('be.visible');
    }

    shareBaseViaEmail(email) {
        this.share().click();
        this.addCollaborators().eq(1).click();
        this.collaboratorEmailField().type(email);
        this.accessToBase().click();
        this.selectEditor().click();
        this.sendInvite().click();
    };

    collaboratorInvited(collaboratorEmail) {
        cy.xpath('//div[contains(text(),\'Base collaborators\')]', {timeout: 10000})
            .should('be.visible');
        this.collaboratorEmail().eq(0).should('have.text', collaboratorEmail);
        this.collaboratorRoles().eq(1).should('have.text', 'Editor');
    };
};
