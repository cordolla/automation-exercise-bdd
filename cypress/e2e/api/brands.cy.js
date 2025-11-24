const mocks = require('../../mocks/mocks');
describe.only('Brand Api Tests', () => {
    it('PUT to all brands', () => {
        cy.requestOrMock({
            method: 'PUT',
            url: '/api/brandsList'
        }, mocks.mockPutBrandsFail).then((res) => {
            expect(res.body.responseCode).to.eq(405);
            expect(res.body.message).to.eq('This request method is not supported.');
        });
    });
});


