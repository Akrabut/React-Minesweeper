import React from 'react';
import Board from './Board'
import Sidenavbar from './Sidenavbar'

const style = {
  textAlign: 'center',
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}

function App() {
  return (
    <main style={style}>
      <Sidenavbar />
      <Board />
    </main>
  );
}

export default App;
