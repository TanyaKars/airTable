import DownloadCSV from "../support/page_obgects/downLoadCSV";

const downloadCSV = new DownloadCSV();

describe.only('Should log in and download CSV file to the created base', () => {
    before('should login', () => {
        const email =  "your.emailfakedata@gmail.com", name = "Fake Name", password = "123123qwe"
        cy.visit('/');
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.login(email, password);
    });

    it('Should download CSV file to the created base and delete table', () => {
        const filepath = 'files_to_upload/clientBase.csv'
        downloadCSV.uploadCSVFile(filepath);
        downloadCSV.deleteImportedTable();
    });

    it('Should switch columns using drag&drop', () => {

    })
});
