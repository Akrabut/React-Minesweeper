/* eslint-disable no-undef */
describe('OptionsBar', function() {
  it('options bar is displayed when options button is clicked', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Options')
    .click()
    cy.get('.bar')
  })

  it('enables superman mode when clicked', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Options')
    .click()
    cy.get('.superman-button')
    .click()
    cy.get('.superman-tile')
  })

  it('restarts the game with different inputs when restart button is clicked', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Options')
    .click()
    cy.get('#row-input').clear().type(10)
    cy.get('#column-input').clear().type(10)
    cy.get('#mine-input').clear().type(4)
    cy.get('#restart-button')
    .click()
    cy.contains('x 4')
  })
})