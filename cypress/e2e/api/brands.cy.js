describe('Brand Api Tests', () => {
    it('PUT to all brands', () => {
        cy.request({
            method: 'PUT',
            url: '/api/brandsList'
        }).then((response) => {
            expect(response.status).to.eq(200);
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq('This request method is not supported.');
        });
    });
});
