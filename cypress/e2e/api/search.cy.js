describe('Search API Tests', () => {
    it('POST search all Products', () => {

        const itemBuscado = 'Dress';
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product: itemBuscado
            }
        }).then((response) => {
            expect(response.status).to.eq(200);

            const corpo = JSON.parse(response.body);

            expect(corpo.responseCode).to.eq(200);
            expect(corpo.products).to.be.an('array');

            const nomeProduto = corpo.products[0].name.toLowerCase();
            expect(nomeProduto).to.include(itemBuscado.toLowerCase());

            cy.log(`Primeiro Produto Encontrado: ${corpo.products[0].name}`);
        });
    });

    it('POST search with empty parameter', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            failOnStatusCode: false,
            body: {
            }
        }).then((response) => {
            const corpo = JSON.parse(response.body);

            expect(corpo.products).to.be.undefined;

            expect(corpo.responseCode).to.eq(400);
            expect(corpo.message).to.eq('Bad request, search_product parameter is missing in POST request.');
        });
    });
});