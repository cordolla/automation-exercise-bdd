import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na pagin inicial", () => {
    cy.visit('/');
});

When("eu clico em 'Products' no menu superior", () => {
    cy.contains(' Products').click();
});

Then("eu verifico que a pagina 'All Products' é exibida", () => {
    cy.get('.features_items').should('be.visible');
});

And("eu verifico se estou na pagina de todos os produtos", () => {
    cy.url().should('include', '/products');
});

When("eu clico no 'View Product' do primeiro produto", () => {
    cy.get('a[href="/product_details/1"]').click();
});

Then("eu verifico se os detalhes estão visíveis: nome do produto, categoria, preço, disponibilidade, condição, marca", () => {
    cy.get('div.product-information').as('detalhesProduto');

    cy.get('@detalhesProduto').find('h2')
        .should('be.visible')
        .and('not.be.empty');
    
    cy.get('@detalhesProduto').find('p:contains("Category")')
        .should('be.visible')

    cy.get('@detalhesProduto').find('span:contains("Rs.")')
        .should('be.visible');
    
    cy.get('@detalhesProduto').find('label:contains("Quantity:")').should('be.visible');
    cy.get('@detalhesProduto').find('input[name="quantity"]')
        .should('be.visible')
        .and('have.value', '1');
    
    });


And("eu pesquiso por 'Dress' na barra de pesquisa", () => {
    cy.get('#search_product').type('Dress');
    cy.get('#submit_search').click();
});

Then("eu verifico se os resultados da pesquisa mostram produtos relacionados a 'Dress'", () => {
    cy.get('.features_items').should('be.visible');
    cy.get('.productinfo').each(($el) => {
        cy.wrap($el).find('h2').should('be.visible');
    });
});