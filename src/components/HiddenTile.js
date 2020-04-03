import React from 'react'
import { Card } from 'semantic-ui-react'

const HiddenTile = ({ style, handleClick }) => (
  <Card className='hidden-tile' raised style={style} onClick={handleClick} />
  // {/* <div className='hidden-tile' style={style} onClick={handleClick}>
  //   {'?'}
  // </div> */}
)

// const areEqual = (prevProps, nextProps) => {
//   // console.log(prevProps.style.backgroundColor === nextProps.style.backgroundColor);
//   return prevProps.style.backgroundColor === nextProps.style.backgroundColor
// }

// export default React.memo(HiddenTile, areEqual)
export default HiddenTile