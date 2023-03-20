/// <reference types="cypress" />

describe("Validation Body PokeAPI", () => {
  it("Validate Body", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto")
      .as("pokemon")
      .then((response) => {
        expect(response.status).equal(200);
        expect(response.body.name).to.eq("ditto");

    cy.request("https://pokeapi.co/api/v2/pokemon")
      .as("pokemon")
      .then((response) => {
         expect(response.body.count).to.eq(1281);
    });
    
    cy.get("@pokemon").its("headers").its("content-type").should("include", "application/json; charset=utf-8");
    
  });
  });
});
