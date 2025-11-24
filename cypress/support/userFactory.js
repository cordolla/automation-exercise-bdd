export const generateUser = () => {
  return {
    name: "cordolla_user",
    email: `cordolla_${Date.now()}@test.com`,
    password: "StrongPassword123",
    title: "Mr",

    birth_date: "12",
    birth_month: "07",
    birth_year: "1999",

    firstname: "Marcelo",
    lastname: "Cordolla",

    company: "Cordolla Inc",

    address1: "Rua das Flores, 123",
    address2: "Apto 202",

    country: "Brazil",
    zipcode: "60000-000",
    state: "Ceará",
    city: "Pentecoste",

    mobile_number: "85999999999"
  };
};