module.exports = {
    mockLoginSuccess: {
        statusCode: 200,
        body: {
            responseCode: 200,
            message: 'User Exists!'
        }
    },

    mockLoginFail: {
        statusCode: 404,
        body: {
            responseCode: 404,
            message: "User not found!"
        }
    },

    mockMissingEmail: {
        statusCode: 400,
        body: {
            responseCode: 400,
            message: "Bad request, email or password parameter is missing in POST request."
        }
    },

    mockMethodNotAllowed: {
        statusCode: 405,
        body: {
            responseCode: 405,
            message: "This request method is not supported."
        }
    },
    
    mockRegisterSuccess: {
        statusCode: 201,
        body: {
            responseCode: 201,
            message: "User created!"
        }
    },

    mockUserDetails: {
        statusCode: 200,
        body: {
            responseCode: 200,
            user: {
                name: "Test User",
                email: "test@test.com",
                address1: "Rua Mockada"
            }
        }
    },

    mockUpdateSuccess: {
        statusCode: 200,
        body: {
            responseCode: 200,
            message: "User updated!"
        }
    },

    mockDeleteSuccess: {
        statusCode: 200,
        body: {
            responseCode: 200,
            message: "Account deleted!"
        }
    }
};
