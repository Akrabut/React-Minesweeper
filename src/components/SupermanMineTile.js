import React from 'react'
import { Icon, Card } from 'semantic-ui-react'

const SupermanMineTile = ({ style, handleClick }) => (
  <Card className='superman-tile' raised style={style} onClick={handleClick}>
    <Icon fitted={true} name='exclamation' color='red' />
  </Card>
)

const areEqual = (prevProps, nextProps) => {
  // return JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
  return prevProps.style.backgroundColor === nextProps.style.backgroundColor
}

export default React.memo(SupermanMineTile, areEqual)