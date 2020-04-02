import React, { useState, useEffect } from 'react'
import { Icon, Card } from 'semantic-ui-react'

const Tile = ({ x, y, value, isFlagged, isRevealed, superman, makePlay, setFlag, endGame }) => {
  const [revealed, setRevealed] = useState(false)
  const [flagged, setFlagged] = useState(false)

  useEffect(() => {
    setRevealed(isRevealed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRevealed])

  useEffect(() => {
    setFlagged(isFlagged)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlagged])

  const setStyle = () => {
    switch (value) {
      case 1:
        return { color: 'blue' }
      case 2:
        return { color: 'green' }
      case 3:
        return { color: 'red' }
      case 'M':
        return { backgroundColor: 'red' }
      default:
        return {}
    }
  }

  const hiddenStyle = {
    backgroundColor: 'grey',
    color: 'black',
    margin: 0,
    width: 'inherit',
  }

  const handleLeftClick = (e) => {
    // flagged is used to differentiate between flagging and unflagging
    if (flagged && !e.shiftKey) return
    if (e.shiftKey) return setFlag([x, y], value, flagged)
    setRevealed(true)
    // pass setrevealed to flip the tile back after the game restarts
    if (value === 'M') return endGame(setRevealed)
    makePlay([x, y], value)
  }

  const displayProperValue = () => {
    if (value === 'M') return <Icon fitted={true} size='small' name='fire' />
    if (value === 'E') return ' '
    return value
  }

  if (revealed) {
    return (
      <div className='revealed-tile' style={setStyle()}>
        {displayProperValue()}
      </div>
    )
  } else if (flagged) {
    return (
      <Card className='flagged-tile' raised style={hiddenStyle} onClick={handleLeftClick}>
        <Icon fitted={true} name='font awesome flag' />
      </Card>
    )
  } else if (value === 'M' && superman) {
    return (
      <Card className='superman-tile' raised style={hiddenStyle} onClick={handleLeftClick}>
        <Icon fitted={true} name='exclamation' color='red' />
      </Card>
    )
} else {
  return (
    <Card className='hidden-tile' raised style={{...hiddenStyle, color: 'grey'}} onClick={handleLeftClick}>
      {'?'}
    </Card>
  )
}
}

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.isRevealed === nextProps.isRevealed && prevProps.isFlagged === nextProps.isFlagged
// }

// export default React.memo(Tile, areEqual)
export default Tile