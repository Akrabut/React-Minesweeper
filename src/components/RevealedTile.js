import React from 'react'

const RevealedTile = ({ style, value }) => (
  <div className='revealed-tile' style={{ ...style, fontSize: '150%' }}>
    {value}
  </div>
)

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.value === nextProps.value
// }

// export default React.memo(RevealedTile, areEqual)
export default RevealedTile