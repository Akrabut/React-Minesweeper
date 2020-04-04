import React from "react"
import Board from "./Board"
import OptionsBar from "./OptionsBar"
import "../css/grid-style.css"

const style = {
  textAlign: "center",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
}

function App() {
  return (
    <main style={style}>
      <OptionsBar />
      <Board />
    </main>
  );
}

export default App
