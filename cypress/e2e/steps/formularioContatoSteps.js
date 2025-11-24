const { And, Given, Then, When } = require("cypress-cucumber-preprocessor/steps");
require('cypress-file-upload');

Given("que eu estou na pagina inicial", () => {
    cy.visit('/');
});

When("eu clico no link 'Contact Us'", () => {
    cy.contains(' Contact us').click();
});

Then("eu verifico que a pagina 'Contact Us' é exibida", () => {
    cy.url().should('include', '/contact_us');
    cy.get('h2').contains('Get In Touch').should('be.visible');
});

And("eu preencho o formulario de contato com nome, email, assunto e mensagem válidos", () => {
    cy.get('[data-qa="name"]').type("Marcelo");
    cy.get('[data-qa="email"]').type("teste@gmail.com");
    cy.get('[data-qa="subject"]').type("Assunto de Teste");
    cy.get('[data-qa="message"]').type("Mensagem de teste para o formulario de contato.");
});

And("eu carrego o arquivo 'imagem_teste.png' no campo 'Upload File'", () => {
    const filePath = 'uploads/img_test.png';
    cy.get('input[name="upload_file"]').attachFile(filePath);
    cy.wait(1000);
});

When("eu clico no botao 'Submit'", () => {
    cy.get('input[data-qa="submit-button"]').click();
});

Then("eu verifico que a mensagem 'Success! Your details have been submitted successfully.' é exibida", () => {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
});