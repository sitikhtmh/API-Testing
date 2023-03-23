/// <reference types="cypress" />

describe("Validation Content with PokeAPI", () => {
  it("Validate Content name: Limber", () => {
    cy.request("https://pokeapi.co/api/v2/ability/7/").then((response) => {
      expect(response.body.name).to.eq("limber");
    });
  });
});
