import React, { useState } from 'react'
import { Card, Icon, Table } from 'semantic-ui-react'

const Tile = ({ x, y }) => {
  const [revealed, setRevealed] = useState(false)

// asterisk=bomb flag=font awesome flag/flag
  if (revealed) {
    return (
      <Card as={Table.Cell} fluid>
        hi
      </Card>
    )
  } else {
    return (
      <Card raised fluid as={Table.Cell} onClick={() => setRevealed(true)}>
        ?
      </Card>
    )
  }
}

export default Tile