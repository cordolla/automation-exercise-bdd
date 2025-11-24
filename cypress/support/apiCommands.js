Cypress.Commands.add('apiCreateUser', (user) => {
    return cy.request({
        method: 'POST',
        url: '/api/createAccount',
        form: true,
        body: {
            title: 'Mr',
            birth_month: '05',
            birth_day: '15',
            birth_year: '1990',
            ...user
        }
    });
});

Cypress.Commands.add('apiDeleteAccount', (email, password) => {
    return cy.request({
        method: 'DELETE',
        url: '/api/deleteAccount',
        form: true,
        body: { email, password }
    });
});

Cypress.Commands.add('apiLogin', (email, password) => {
    cy.request({
        method: 'POST',
        url: '/api/verifyLogin',
        form: true,
        body: { email, password }
    });
});