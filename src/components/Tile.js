import React, { useState } from 'react'
import { Card, Transition, Icon } from 'semantic-ui-react'

const Tile = ({ x, y, value }) => {
  const [revealed, setRevealed] = useState(false)

  const displayProperValue = () => {
    if (value === 'M') return <Icon fitted={true} size='small' name='fire' />
    if (value === 'E') return ' '
    return value
  }

// asterisk=bomb flag=font awesome flag/flag
  if (revealed) {
    return (
      <Transition visible transitionOnMount={true} duration={1000}>
      <Card fluid>
        {displayProperValue()}
      </Card>
      </Transition>
    )
  } else {
    return (
      <Card raised fluid style={{backgroundColor:'grey'}} onClick={() => setRevealed(true)}>
      <p style={{color: 'grey'}}>?</p>
      </Card>
    )
  }
}

export default Tile