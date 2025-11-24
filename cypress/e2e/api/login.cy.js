    describe('Login Scenarios', () => {
        let loginEmail = `login${Date.now()}@test.com`
        let loginPassword = `pass${Date.now()}`;

        before(() => {
            return cy.request({
                method: 'POST',
                url: '/api/createAccount',
                form: true,
                body: {
                    name: "Login User",
                    email: loginEmail,
                    password: loginPassword,
                    title: "Mr",
                    birth_day: "05",
                    birth_month: "01",
                    birth_year: "2000",
                    firstname: "Login",
                    lastname: "User",
                    company: "Test Co",
                    address1: "Test St",
                    country: "United States",
                    zipcode: "12345",
                    state: "NY",
                    city: "NY",
                    mobile_number: "1234567890"
                }
            }).then((response) => {
                let body;
                try {
                    body = JSON.parse(response.body);
                } catch {
                    body = response.body;
                }
                expect(body.responseCode).to.eq(201);
            });
        });

        it('POST To Verify Login with valid details', () => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,
                body: {
                    email: loginEmail,
                    password: loginPassword
                }
            }).then((response) => {
                expect(response.status).to.eq(200);

                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
                expect(body.responseCode).to.eq(200);
                expect(body.message).to.eq('User exists!');
            });
        });

        it('POST To Verify Login without email parameter', () => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,
                failOnStatusCode: false,
                body: {
                    password: loginPassword
                }
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

                expect(body.responseCode).to.eq(400);
                expect(body.message).to.eq('Bad request, email or password parameter is missing in POST request.');
            });
        });

        it('POST para Verificar Login com dados inválidos', () => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,
                body: {
                    email: 'naoexiste@gmail.com',
                    password: 'senhaerrada'
                }
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

                expect(body.responseCode).to.eq(404);
                expect(body.message).to.eq('User not found!');
            });
        });

        it('DELETE To Verify Login', () => {
            cy.request({
                method: 'DELETE',
                url: '/api/verifyLogin',
                failOnStatusCode: false
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

                expect(body.responseCode).to.eq(405);
                expect(body.message).to.eq('This request method is not supported.');
            });
        });
    });