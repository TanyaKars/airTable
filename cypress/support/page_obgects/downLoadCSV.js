export default class DownloadCSV {
    //BUTTONS
    homePageSignIn = () => cy.get('.css-10n548d');
    modalSignIn = () => cy.get('.signInButton');
    base = () => cy.get('[aria-label="Untitled Base"]');
    addImport = () => cy.get('[data-tutorial-selector-id] .flex-none.flex.items-center [role]');
    uploadFile = () => cy.xpath('//input[@id=\'fsp-fileUpload\']');
    upload = () => cy.get('[title = \'Upload\']');
    import = () => cy.get('.blueBright', {timeout: 10000}).should('exist');


    //FILE TYPES
    scv = () => cy.xpath('//span[contains(text(),\'CSV file\')]');


    //FIELDS
    fEmail = () => cy.get('input[name=\'email\']');
    fPassword = () => cy.get('input[name=\'password\']');
    tables = () => cy.get('.big.flex-auto.truncate');
    tableMenu = () => cy.get('[data-tutorial-selector-id="openTableMenuButton"]').eq(1);
    deleteTable = () => cy.xpath('//span[contains(text(),\'Delete table\')]');
    deleteTableBTN = () => cy.xpath('//button[contains(text(),\'Delete\')]');
    column1 = () => cy.xpath('//div[contains(text(),\'Notes\')]');
    column2 = () => cy.xpath('//div[contains(text(),\'Attachments\')]');

    uploadCSVFile(filepath) {
        this.base().click();
        this.addImport().click();
        this.scv().click();
        this.uploadFile().attachFile(filepath);
        this.upload().click();
        this.import().click();
        this.tables().should('contain.text', 'Imported table');
    }

    deleteImportedTable() {
        this.tableMenu().click();
        this.deleteTable().click();
        this.deleteTableBTN().click();
    }

    switch2columns () {
        this.column1().drag(this.column2, 'left')

    }
}
