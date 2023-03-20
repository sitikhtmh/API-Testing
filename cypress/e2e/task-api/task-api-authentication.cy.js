/// <reference types="cypress" />

describe("Authentication login via API", () => {
  it("login API with website reqres.in", () => {
    cy.loginViaAPI();
  });
});
