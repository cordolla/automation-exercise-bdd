const mocks = require('../../mocks/mocks');
describe('Product API Tests', () => {

    it('GET To Retrieve All Products', () => {
        cy.requestOrMock({
            method: 'GET',
            url: '/api/productsList'
        }, mocks.mockGetAllProducts).then((res) => {

            expect(res.status).to.eq(200);

            expect(res.body.responseCode).to.eq(200);
            expect(res.body.products).to.be.an('array');
            expect(res.body.products.length).to.be.greaterThan(0);
        });
    });

    it('POST to all products', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/productsList'
        }, mocks.mockMethodNotAllowed).then((res) => {
            expect(res.body.responseCode).to.eq(405);
            expect(res.body.message).to.eq('This request method is not supported.');
        });
    });
});
