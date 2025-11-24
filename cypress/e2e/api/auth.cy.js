const { generateUser } = require('../../support/userFactory');
const mocks = require('../../mocks/mocks');

describe('Authentication API Tests', () => {
    let userData;

    before(() => {
        userData = generateUser();
    });

    it('POST Create User', () => {
        cy.requestOrMock({
            method: 'POST',
            url: '/api/createAccount', 
            form: true, 
            body: userData
        }, mocks.mockRegisterSuccess).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq('User created!');
        });
    });

    it('GET User Details', () => {
        cy.requestOrMock({
            method: 'GET',
            url: '/api/getUserDetailByEmail',
            qs: { email: userData.email }
        }, mocks.mockUserDetails).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.user).to.be.an('object');
            if (!Cypress.env('mockMode')) {
                expect(res.body.user.email).to.eq(userData.email);
            } else {
                expect(res.body.user.email).to.exist;
            }
        });
    });

    it('PUT Update User', () => {
        cy.requestOrMock({
            method: 'PUT',
            url: '/api/updateAccount',
            form: true,
            body: {
                ...userData,
                city: 'Cidade Nova Refatorada',
                mobile_number: '85999999999'
            }
        }, mocks.mockUpdateSuccess).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq('User updated!');
        });
    });

    it('DELETE User Account', () => {
        cy.requestOrMock({
            method: 'DELETE',
            url: '/api/deleteAccount',
            form: true,
            body: {
                email: userData.email,
                password: userData.password
            }
        }, mocks.mockDeleteSuccess).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq('Account deleted!');
        });
    });
});