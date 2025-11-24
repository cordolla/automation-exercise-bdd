const mocks = require('../../mocks/mocks');
const { generateUser } = require('../../support/userFactory');

describe('Login Scenarios', () => {
    let userData;

    before(() => {
        userData = generateUser();

        cy.requestOrMock({
            method: 'POST',
            url: '/api/createAccount',
            form: true,
            body: userData
        }, mocks.mockRegisterSuccess).then((res) => {
            expect(res.status).to.be.oneOf([200, 201]);
        });
    });

    it('POST To Verify Login with valid details', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                email: userData.email,
                password: userData.password
            }
        }, mocks.mockLoginSuccess).then((res) => {
            expect(res.body.responseCode).to.eq(200);
            expect(res.body.message).to.eq('User exists!');
        });
    });

    it('POST To Verify Login without email parameter', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            failOnStatusCode: false,
            body: {
                password: userData.password
            }
        }, mocks.mockMissingEmail).then((res) => {
            expect(res.body.responseCode).to.eq(400);
            expect(res.body.message).to.eq('Bad request, email or password parameter is missing in POST request.');
        });
    });

    it('POST para Verificar Login com dados inválidos', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            failOnStatusCode: false,
            body: {
                email: 'naoexiste@gmail.com',
                password: 'senhaerrada'
            }
        }, mocks.mockLoginFail).then((res) => {
            expect(res.body.responseCode).to.eq(404);
            expect(res.body.message).to.eq('User not found!');
        });
    });

    it('DELETE To Verify Login', () => {
        cy.requestOrMock({
            method: 'DELETE',
            url: '/api/verifyLogin',
            failOnStatusCode: false
        }, mocks.mockMethodNotAllowed).then((res) => {
            expect(res.body.responseCode).to.eq(405);
            expect(res.body.message).to.eq('This request method is not supported.');
        });
    });
});