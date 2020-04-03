import React from "react";
import Board from "./Board";
import Sidenavbar from "./Sidenavbar";
import "../css/style.css";
const style = {
  textAlign: "center",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
};
// TODO: TESTS, PERFORMANCE
function App() {
  return (
    <main style={style}>
      <Sidenavbar />
      <Board />
    </main>
  );
}

export default App;
