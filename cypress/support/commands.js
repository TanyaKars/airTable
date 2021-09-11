import DownloadCSV from "./page_obgects/downLoadCSV";

const downloadCSV = new DownloadCSV();
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
    Cypress.Commands.add('login', (email, password) => {
        downloadCSV.homePageSignIn().click();
        downloadCSV.fEmail().type(email);
        downloadCSV.fPassword().type(password);
        downloadCSV.modalSignIn().click();
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
