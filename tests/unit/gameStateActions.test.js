import { revealAdjacentEmptyTiles } from '../../src/helpers/gameStateActions'

describe('revealing adjacent cells in a board', () => {
  const board = [
    'M', 1, 'E',
    1, 1, 'E',
    'M', 1, 'E',
  ]

  test('when given an empty cell as cell input', () => {
    const revealed = revealAdjacentEmptyTiles([0, 2], board).map(reveal => JSON.stringify(reveal))
    expect(revealed.length === 3 && revealed.includes(JSON.stringify([0, 2])) && revealed.includes(JSON.stringify([1, 2])) && revealed.includes(JSON.stringify([2, 2])))
  })
})