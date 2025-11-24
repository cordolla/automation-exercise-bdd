module.exports = {
    mockLoginSuccess: {
        statusCode: 200,
        body: {
            responseCode: 200,
            message: 'User exists!'
        }
    },

    mockLoginFail: {
        statusCode: 200,
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
        statusCode: 200,
        body: {
            responseCode: 200,
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
    },

    mockPutBrandsFail: {
        statusCode: 200,
        body: {
            responseCode: 405,
            message: "This request method is not supported."
        }
    },

    mockGetAllProducts: {
        statusCode: 200,
        body: {
            responseCode: 200,
            products: [
                { id: 1, name: "Blue Top Mockado", price: "Rs. 500", brand: "Polo", category: { usertype: { usertype: "Women" }, category: "Tops" } },
                { id: 2, name: "Men Tshirt Mockado", price: "Rs. 400", brand: "H&M", category: { usertype: { usertype: "Men" }, category: "Tshirts" } }
            ]
        }
    },

    mockSearchSuccess: {
        statusCode: 200,
        body: {
            responseCode: 200,
            products: [
                {
                    id: 1,
                    name: "Sleeveless Dress Mockado", 
                    price: "Rs. 1000",
                    brand: "Madame",
                    category: {
                        usertype: { usertype: "Women" },
                        category: "Dress"
                    }
                },
                {
                    id: 2,
                    name: "Stylish Dress Mockado",
                    price: "Rs. 1500",
                    brand: "Madame",
                    category: {
                        usertype: { usertype: "Women" },
                        category: "Dress"
                    }
                }
            ]
        }
    },
    mockSearchMissingParam: {
        statusCode: 200, 
        body: {
            responseCode: 400,
            message: "Bad request, search_product parameter is missing in POST request."
        }
    }
};
