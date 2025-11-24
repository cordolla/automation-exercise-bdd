const mock = require('../../mocks/mocks');

describe('Search API Tests', () => {
    it('POST search all Products', () => {

        const itemBuscado = 'Dress';

        cy.requestOrMock({
            method: 'POST',
            url: '/api/searchProduct',
            form: true,
            body: {
                search_product: itemBuscado
            }
        }, mock.mockSearchSuccess).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.responseCode).to.eq(200);
            expect(res.body.products).to.be.an('array');
            expect(res.body.products.length).to.be.greaterThan(0);
            expect(res.body.products[0].name).to.include(itemBuscado)
        });
    });

    it('POST search with empty parameter', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/searchProduct',
            form: true,
            failOnStatusCode: false,
            body: {}
        }, mock.mockSearchMissingParam).then((res) => {

            expect(res.status).to.eq(200)
            expect(res.body.products).to.be.undefined;
            expect(res.body.responseCode).to.eq(400);
            expect(res.body.message).to.eq('Bad request, search_product parameter is missing in POST request.');
        });
    });
});