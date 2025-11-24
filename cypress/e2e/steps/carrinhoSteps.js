const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");

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


And("eu adiciono o primeiro produto ao carrinho", () => {
    cy.get('a[data-product-id="3"]').first().click();
});

And("eu clico no botao 'Continue Shopping'", () => {
    cy.contains('Continue Shopping').click();
});

And("eu adiciono o segundo produto ao carrinho", () => {
    cy.get('a[data-product-id="6"]').first().click();
});

And("eu clico no botao 'View Cart'", () => {
    cy.contains('View Cart').click();
});

Then("eu verifico se os produtos foram adicionados ao carrinho com sucesso", () => {
    cy.get('#cart_info_table').should('be.visible');
    cy.get('#cart_info_table tbody tr').should('have.length', 2);
});

And("eu verifico seus preços, quantidade e total", () => {
    cy.get('#cart_info_table tbody tr').eq(0).as('primeiroProduto');
    cy.get('#cart_info_table tbody tr').eq(1).as('segundoProduto');

    cy.get('@primeiroProduto').find('.cart_price').should('be.visible');
    cy.get('@primeiroProduto').find('.cart_quantity').should('be.visible');
    cy.get('@primeiroProduto').find('.cart_total').should('be.visible');
    cy.get('@segundoProduto').find('.cart_price').should('be.visible');
    cy.get('@segundoProduto').find('.cart_quantity').should('be.visible');
    cy.get('@segundoProduto').find('.cart_total').should('be.visible');
});

And("eu clico no 'View Product' do primeiro produto", () => {
    cy.get('a[href="/product_details/1"]').click();
});

When("eu verifico se os detalhes do produto estão visíveis", () => {
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

And("eu aumento a quantidade para 4", () => {
    cy.get('input[name="quantity"]').clear().type('4');
});

And("eu clico no botao 'Add to cart'", () => {
    cy.contains(' Add to cart ').click();
});

And("eu clico no botao 'View Cart' no modal", () => {
    cy.contains('View Cart').click();
});

Then("eu verifico se a quantidade do produto no carrinho é exata", () => {
    cy.get('td.cart_quantity').first().find('button.disabled').should('have.text', '4');
});