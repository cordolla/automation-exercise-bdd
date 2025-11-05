import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na pagina inicial", () => {
    cy.visit('/');
});

When("eu clico no botao 'Signup / Login'", () => {
    cy.contains('Signup / Login').click();
});

And("eu preencho o campo 'Email Address' com credencias validas", () => {
    cy.fixture('user').then((user) => {
        cy.get('input[data-qa="login-email"]').type(user.email);
    });
});

And("eu preencho o campo 'Password' com uma senha valida", () => {
    cy.get('input[data-qa="login-password"]').type("SenhaSegura123");
});

When("eu clico no botao 'Login'", () => {
    cy.get('button[data-qa="login-button"]').click();
});

Then("eu verifico que estou logado como 'Marcelo'", () => {
    cy.contains('Logged in as Marcelo').should('be.visible');
});

And("eu clico no botao 'Logout'", () => {
    cy.contains('Logout').click();
});

Then("eu verifico que sou redirecionado para a pagina de login", () => {
    cy.contains('Login to your account').should('be.visible');
});

And("eu preencho o campo 'Email Address' com email inexistente", () => {
    const emailInexistente = `inexistente${new Date().getTime()}@exemplo.com`;
    cy.get('input[data-qa="login-email"]').type(emailInexistente);
});

And("eu preencho o campo 'Password' com senha incorreta", () => {
    cy.get('input[data-qa="login-password"]').type("SenhaIncorreta");
});

Then("eu verifico que uma mensagem de erro 'Your email or password is incorrect!' é exibida", () => {
    cy.contains('Your email or password is incorrect!').should('be.visible');
});