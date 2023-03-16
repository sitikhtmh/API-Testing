describe("Update User", () => {
    it('Update user', () => {
        var newUser = {
            "name": 'sitikhtmh',
            "job": 'QA'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    })
 
})