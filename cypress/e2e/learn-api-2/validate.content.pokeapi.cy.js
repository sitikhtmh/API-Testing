/// <reference types="cypress" />

describe("Validation Content with PokeAPI", () => {
    it('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"})
    });

    it('Validate Content Body Bulbasaur', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });

    it('Update user', () => {
        var newUser = {
            "name": 'Siti Khotimah',
            "job": 'Quality Assurance'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    })
 
})