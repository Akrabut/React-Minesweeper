import React, { useState, useEffect } from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Tile = ({ x, y, value, isFlagged, isRevealed, makePlay, setFlag, endGame }) => {
  const [revealed, setRevealed] = useState(false)
  const [flagged, setFlagged] = useState(false)
  // whether a tile if flagged or revealed should be persisted between rounds
  // a tile obviously cant be both, but checking for that is redundant
  useEffect(() => {
    setFlagged(isFlagged)
    setRevealed(isRevealed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRevealed, isFlagged])

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

  const handleLeftClick = () => {
    setRevealed(true)
    if (value === 'M') return endGame()
    makePlay([x, y], value)
  }

  const displayProperValue = () => {
    if (value === 'M') return <Icon fitted={true} size='small' name='fire' />
    if (value === 'E') return ' '
    return value
  }

  if (revealed) {
    return (
      // <Transition visible transitionOnMount={true} duration={1000}>
        <Card fluid style={setStyle()}>
          {displayProperValue()}
        </Card>
      // </Transition>
    )
  } else if (flagged) {
    return (
      <Card fluid style={{ backgroundColor: 'grey' }} onClick={() => setRevealed(true)}>
        <Icon fitted={true} size='small' name='font awesome flag' />
      </Card>
    )
  } else {
    return (
      <Card fluid style={{ backgroundColor: 'grey' }} onClick={handleLeftClick}>
        <p style={{ color: 'grey' }}>?</p>
      </Card>
    )
  }
}

export default Tile