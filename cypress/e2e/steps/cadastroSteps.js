import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let emailCadastrado;

Given("que eu estou na pagina inicial", () => {
    cy.visit('/');
});

When("eu clico no botao 'Signup / Login'", () => {
    cy.contains('Signup / Login').click();
});

And("eu preencho o campo 'Name' com 'Marcelo'", () => {
    cy.get("input[data-qa='signup-name']").type("Marcelo");
});

And("eu preencho o campo 'Email Address' com email valido unico", () => {
    emailCadastrado = `Marcelo${new Date().getTime()}@exemplo.com`;
    cy.get('input[data-qa=signup-email]').type(emailCadastrado);

    Cypress.env('ultimo_email_cadastrado', emailCadastrado);

    cy.writeFile('cypress/fixtures/user.json', 
        { 
            email: emailCadastrado 
        });
});

When("eu clico no botao 'Signup'", () => {
    cy.get('[data-qa="signup-button"]').click();
});

When("eu seleciono o titulo 'Mr'", () => {
    cy.get('input[id="id_gender1"]').check();
});

And("eu preencho o campo 'Password' com 'SenhaSegura123'", () => {
    cy.get('input[data-qa="password"]').type("SenhaSegura123");
});

And("eu preencho os campos de data de nascimento", () => {
    cy.get('select[data-qa="days"]').select('10');
    cy.get('select[data-qa="months"]').select('May');
    cy.get('select[data-qa="years"]').select('1990');
});

And("eu seleciono a opcao 'Sign up for our newsletter!'", () => {
    cy.get('#newsletter').check();
});

And("eu seleciono a opcao 'Receive special offers from our partners!'", () => {
    cy.get('#optin').check();
});

And("eu preencho os campos de First Name, Last Name, Company, Address, Country, State, City, Zipcode e Mobile Number", () => {
    cy.get('input[data-qa="first_name"]').type("Marcelo");
    cy.get('input[data-qa="last_name"]').type("Silva");
    cy.get('input[data-qa="company"]').type("Empresa Exemplo");
    cy.get('input[data-qa="address"]').type("Rua Exemplo 123");
    cy.get('select[data-qa="country"]').select("Canada");
    cy.get('input[data-qa="state"]').type("Ontario");
    cy.get('input[data-qa="city"]').type("Toronto");
    cy.get('input[data-qa="zipcode"]').type("M4B1B3");
    cy.get('input[data-qa="mobile_number"]').type("+14161234567");
});

When("eu clico no botao 'Create Account'", () => {
    cy.get('button[data-qa="create-account"]').click();
});

Then("eu verifico que a mensagem 'ACCOUNT CREATED!' é exibida", () => {
    cy.contains('Account Created!').should('be.visible');
});

When("eu clico no botao 'Continue'", () => {
    cy.get('a[data-qa="continue-button"]').click();
});

Then("eu verifico que estou logado como 'Marcelo'", () => {
    cy.contains('Logged in as Marcelo').should('be.visible');
});

And("eu preencho o campo 'Email Address' com email ja cadastrado", () => {
    cy.get('input[data-qa=signup-email]').type('teste@gmail.com');
});

Then("eu verifico que a mensagem 'Email Address already exist!' é exibida", () => {
    cy.contains('Email Address already exist!').should('be.visible');
});
