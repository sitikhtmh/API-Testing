describe("Create New User", () => {
    it("Add a new user", () => {
      var user = {
        name: "Siti Khotimah",
        job: "Quality Assurance",
      };
      cy.request("POST", "https:reqres.in/api/users", user).then((response) => {
        expect(response.status).equal(201);
        expect(response.body).to.have.property("name", "Siti Khotimah");
        expect(response.body).to.have.property("job", "Quality Assurance");
      });
    });
  });
  