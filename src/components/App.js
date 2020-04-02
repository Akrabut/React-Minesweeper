import React from 'react';
import Board from './Board'
import Sidenavbar from './Sidenavbar'

const style = {
  textAlign: 'center',
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}
// TODO: TESTS, SIDEBAR SUPPORT FOR MOBILE, PERFORMANCE
function App() {
  return (
    <main style={style}>
      <Sidenavbar />
      <Board />
    </main>
  );
}

export default App;
