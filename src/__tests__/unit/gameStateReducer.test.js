import { calcNumOfMines, generateBoard, defaultState } from '../../helpers/gameStateReducer'

test('number of mines is calculated properly', () => {
  expect(calcNumOfMines(100, 110)).toBe(1375)
})

test('default state has all required properties', () => {
  expect(defaultState.hasOwnProperty('rows')
    && defaultState.hasOwnProperty('columns')
    && defaultState.hasOwnProperty('numOfMines')
    && defaultState.hasOwnProperty('remainingFlags')
    && defaultState.hasOwnProperty('remainingMines')
    && defaultState.hasOwnProperty('board')
    && defaultState.hasOwnProperty('mines')
    && defaultState.hasOwnProperty('setFlags')
    && defaultState.hasOwnProperty('revealedTiles'))
})

describe('generateBoard generates board with correct values', () => {
  test('returns a two element array with board and mines', () => {
    expect(generateBoard(20, 20, 50).length).toBe(2)
  })

  test('has a mine on a 3x3 board', () => {
    const board = generateBoard(3, 3, calcNumOfMines(3, 3))
    expect(board[0].some(row => {
      return row.some(cell => cell === 'M')
    }) && board[1].size > 0).toBe(true)
  })

  test('does not undefined cells on the board', () => {
    const board = generateBoard(10, 10, calcNumOfMines(10, 10))
    expect(board[0].every(row => {
      return row.every(cell => cell)
    })).toBe(true)
  })
})