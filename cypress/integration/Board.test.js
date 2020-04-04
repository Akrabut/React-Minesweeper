/* eslint-disable no-undef */
describe('OptionsBar', function () {
  it('grid is properly displayed', function () {
    cy.visit('http://localhost:3000')
    cy.get('.Grid')
  })

  it('tiles are clickable', function () {
    cy.visit('http://localhost:3000')
    cy.get('.Grid')
    cy.get('.GridItemEven:first')
    .click()
    cy.get('.revealed-tile')
  })
})