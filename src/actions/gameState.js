export const initGame = (rows, columns) => {
  return {
    type: 'INIT_GAME',
    data: {
      rows: rows,
      columns: columns,
    }
  }
}

export const makePlay = (clickedTile) => {

}

export const setFlag = (flaggedTile, isMine) => {
  // flaggedTile should be in format [i, j]
  // isMine indicates whether flagged tile has mine underneath
  return {
    type: 'SET_FLAG',
    mineFlagged: isMine,
    coord: flaggedTile,
  }
}