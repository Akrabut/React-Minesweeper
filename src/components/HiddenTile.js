import React from 'react'
import { Card } from 'semantic-ui-react'

const HiddenTile = ({ style, handleClick }) => (
  <Card className='hidden-tile' raised style={style} onClick={handleClick}>
    {'?'}
  </Card>
)

const areEqual = (prevProps, nextProps) => {
  return prevProps.style === nextProps.style
}

export default React.memo(HiddenTile, areEqual)