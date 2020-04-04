import { revealAdjacentEmptyTiles } from '../../helpers/gameStateActions'

describe('revealing adjacent cells in a board', () => {
  const board = [
    ['M', 1, 'E'],
    [1, 1, 'E'],
    ['M', 1, 'E'],
  ]

  test('when given an empty cell as cell input, reveals adjacent empty/number cells', () => {
    const revealed = revealAdjacentEmptyTiles([0, 2], board, new Set()).map(reveal => JSON.stringify(reveal))
    expect(revealed.length === 6
      && revealed.includes(JSON.stringify([0, 2]))
      && revealed.includes(JSON.stringify([1, 2]))
      && revealed.includes(JSON.stringify([2, 2]))
      && revealed.includes(JSON.stringify([2, 1]))
      && revealed.includes(JSON.stringify([1, 1]))
      && revealed.includes(JSON.stringify([0, 1])))
      .toBe(true)
  })

  test('when given a mine, does not reveal adjacent cells', () => {
    const revealed = revealAdjacentEmptyTiles([0, 0], board, new Set()).map(reveal => JSON.stringify(reveal))
    expect(revealed.length === 1 && revealed.includes(JSON.stringify([0, 0])))
  })

  test('when given a number cell, reveal only that cell', () => {
    const revealed = revealAdjacentEmptyTiles([0, 1], board, new Set()).map(reveal => JSON.stringify(reveal))
    expect(revealed.length === 1 && revealed.includes(JSON.stringify([0, 1])))
  })

  test('ignores flagged cells', () => {
    const flaggedTiles = new Set()
    flaggedTiles.add(JSON.stringify([2, 1]))
    const revealed = revealAdjacentEmptyTiles([0, 2], board, flaggedTiles).map(reveal => JSON.stringify(reveal))
    expect(revealed.length === 5
      && revealed.includes(JSON.stringify([0, 2]))
      && revealed.includes(JSON.stringify([1, 2]))
      && revealed.includes(JSON.stringify([2, 2]))
      && revealed.includes(JSON.stringify([1, 1]))
      && revealed.includes(JSON.stringify([0, 1])))
      .toBe(true)
  })
})