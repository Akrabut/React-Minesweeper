import React, { useState, useEffect } from 'react'
import { Icon, Card } from 'semantic-ui-react'
import RevealedTile from './RevealedTile'
import FlaggedTile from './FlaggedTile'
import SupermanMineTile from './SupermanMineTile'
import HiddenTile from './HiddenTile'

const Tile = ({ x, y, value, isFlagged, isRevealed, superman, makePlay, setFlag, endGame }) => {
  const [revealed, setRevealed] = useState(isRevealed)
  const [flagged, setFlagged] = useState(isFlagged)
  
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

  const handleClick = (e) => {
    // tile is not left clickable if its flagged
    if (flagged && !e.shiftKey) return
    // tile is shift+left clickable if its hidden or flagged (flag or unflag)
    if (e.shiftKey) return setFlag([x, y], value, flagged)
    setRevealed(true)
    // pass setrevealed to flip the tile back after the game restarts
    // game is over if clicked tile is a mine
    if (value === 'M') return endGame(setRevealed)
    // its a normal turn if none of the above occurs
    makePlay([x, y], value)
  }

  const displayProperValue = () => {
    if (value === 'M') return <Icon fitted={true} size='small' name='fire' />
    if (value === 'E') return ' '
    return value
  }

  if (revealed) {
    return (
      // <div style={setStyle()}>
      //   {displayProperValue()}
      // </div>
      <RevealedTile value={displayProperValue()} style={setStyle()}/>
    )
  } else if (flagged) {
    return (
      // <Card className='flagged-tile' raised style={hiddenStyle} onClick={handleClick}>
      //   <Icon fitted={true} name='font awesome flag' />
      // </Card>
      <FlaggedTile style={hiddenStyle} handleClick={handleClick} />
    )
  } else if (value === 'M' && superman) {
    return (
      // <Card className='superman-tile' raised style={hiddenStyle} onClick={handleClick}>
      //   <Icon fitted={true} name='exclamation' color='red' />
      // </Card>
      <SupermanMineTile style={hiddenStyle} handleClick={handleClick} />
    )
  } else {
    return (
      <HiddenTile style={{ ...hiddenStyle, color: 'grey' }} handleClick={handleClick} />
      // {/* <Card className='hidden-tile' raised style={{ ...hiddenStyle, color: 'grey' }} onClick={handleClick}>
      //   {'?'}
      // </Card> */}
      // <div className='hidden-tile' style={{ ...hiddenStyle, color: 'grey' }} onClick={handleLeftClick}>
      //   {'?'}
      // </div>
    )
  }
}

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.isRevealed === nextProps.isRevealed && prevProps.isFlagged === nextProps.isFlagged
// }

// export default React.memo(Tile, areEqual)
export default Tile