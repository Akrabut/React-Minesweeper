import React from 'react'
import { Icon, Card } from 'semantic-ui-react'

const FlaggedTile = ({ style, handleClick }) => (
  <Card className='flagged-tile' raised style={style} onClick={handleClick}>
    <Icon style={{ lineHeight: '40px' }} size='large' fitted={true} color='green' name='font awesome flag' />
  </Card>
)

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.style.backgroundColor === nextProps.style.backgroundColor
// }

// export default React.memo(FlaggedTile, areEqual)
export default FlaggedTile