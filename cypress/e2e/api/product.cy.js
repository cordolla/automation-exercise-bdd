describe('Product API Tests', () => {

    it('GET To Retrieve All Products', () => {
        cy.request({
            method: 'GET',
            url: '/api/productsList'
        }).then((response) => {
            expect(response.status).to.eq(200);

            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(body.responseCode).to.eq(200);

            expect(body.products).to.be.an('array');

            expect(body.products.length).to.be.greaterThan(0);

            cy.log('Primeiro Produto: ' + JSON.stringify(corpo.products[0].name));

        });
    });
    it('POST to all products', () => {
        cy.request({
            method: 'POST',
            url: '/api/productsList'
        }).then((response) => {
            expect(response.status).to.eq(200);

            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(body.responseCode).to.eq(405);

            expect(body.message).to.eq('This request method is not supported.');
        });
    });
});
