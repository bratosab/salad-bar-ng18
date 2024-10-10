describe('show toppings', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('should see labels for my signup form', () => {
        cy.contains('label', 'Enter your name')
        cy.contains('label', 'Enter your tel')
    })

    it('should fill signup form', () => {
        cy.get('[data-cy="name-input"]').type("Mike")
        cy.get('[data-cy="tel-input"]').type("06 76 66 66 66")
        cy.get('form > button').click()
    })
})

describe('test toppings', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/toppings', {
            statusCode: 200,
            body: [{ name: 'Tomatoes', price: 1000}]
        }).as('getToppings')

        cy.intercept('GET', '**/names', {
            statusCode: 200,
            body: []
        }).as('names')

        cy.visit("/")
        cy.get('[data-cy="name-input"]').type("Mike")
        cy.get('[data-cy="tel-input"]').type("06 76 66 66 66")
        cy.get('form button').click()
    })

    it('verify toppings API response', () => {
        cy.wait('@getToppings').should(({ request, response }) => {
            expect(response?.statusCode).to.eq(200)
            expect(request?.method).to.eq('GET')
        })
    })

    it('verify toppings list', () => {
        cy.wait('@getToppings')

        cy.get('ul li').first().contains('Tomatoes')
    })
})