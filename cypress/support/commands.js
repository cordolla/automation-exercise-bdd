import './apiCommands';

Cypress.Commands.add('requestOrMock', (requestOptions, mockData) => {
    const isMockMode = Cypress.env('mockMode') === true;

    if (isMockMode) {
        cy.log(`Mock Responde: ${requestOptions.method} ${requestOptions.url}`);
        return cy.wrap({
            status: mockData.statusCode,
            statusText: 'OK',
            body: mockData.body,
            headers: {},
            duration: 15
        });
    } else {
        return cy.request(requestOptions).then((response) => {
            if (typeof response.body === 'string') {
                try {
                    response.body = JSON.parse(response.body);
                } catch (e) {
                    cy.log('Não foi possível fazer parse do body: ' + e.message);
                }
            }
            return response;
        });
    }
})