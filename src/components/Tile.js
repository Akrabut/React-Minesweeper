import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import RevealedTile from "./RevealedTile";
import FlaggedTile from "./FlaggedTile";
import SupermanMineTile from "./SupermanMineTile";
import HiddenTile from "./HiddenTile";

const Tile = ({
  x,
  y,
  value,
  isFlagged,
  isRevealed,
  superman,
  makePlay,
  setFlag,
  endGame,
}) => {
  const [revealed, setRevealed] = useState(isRevealed)
  const [flagged, setFlagged] = useState(isFlagged)

  useEffect(() => {
    setRevealed(isRevealed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRevealed])

  useEffect(() => {
    setFlagged(isFlagged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlagged])

  const setStyle = () => {
    switch (value) {
      case 1:
        return { color: "blue" }
      case 2:
        return { color: "green" }
      case 3:
        return { color: "red" }
      default:
        return {}
    }
  }

  const hiddenStyle = {
    backgroundColor: "grey",
    color: "black",
    margin: 0,
    height: '100%'
  }

  const handleClick = (e) => {
    // tile is not left clickable if its flagged
    if (flagged && !e.shiftKey) return;
    // tile is shift+left clickable if its hidden or flagged (flag or unflag)
    if (e.shiftKey) return setFlag([x, y], value, flagged)
    setRevealed(true)
    // pass setrevealed to flip the tile back after the game restarts
    // game is over if clicked tile is a mine
    if (value === "M") return endGame(setRevealed)
    // its a normal turn if none of the above occurs
    makePlay([x, y], value)
  }

  const displayProperValue = () => {
    if (value === "M") return <Icon fitted={true} size="large" name="fire" color='red' />
    if (value === "E") return " "
    return value;
  }
  if (revealed) {
    return <RevealedTile value={displayProperValue()} style={setStyle()} />;
  } else if (flagged) {
    return (
      <FlaggedTile style={hiddenStyle} handleClick={handleClick} />
    )
  } else if (value === "M" && superman) {
    return (
      <SupermanMineTile style={hiddenStyle} handleClick={handleClick} />
    )
  } else {
    return (
      <HiddenTile style={{ ...hiddenStyle, color: "grey" }} handleClick={handleClick} />
    )
  }
}

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.isRevealed === nextProps.isRevealed && prevProps.isFlagged === nextProps.isFlagged && prevProps.superman === nextProps.superman
// }

// export default React.memo(Tile, areEqual)
export default Tile;
