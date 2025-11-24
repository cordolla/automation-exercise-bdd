import './apiCommands';

Cypress.Commands.add('requestOrMock', (requestOptions, mockData) => {
    const isMockMode = Cypress.env('mockMode') === true;

    if (isMockMode) {
        cy.log(`Mock Responde: ${requestOptions.methos} ${requestOptions.url}`);
        return cy.wrap({
            status: mockData.statusCode,
            statusText: 'OK',
            body: mockData.body,
            headers: {},
            duration: 15
        });
    } else {
        return cy.request(requestOptions);
    }
})