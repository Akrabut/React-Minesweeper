import React from 'react';
import Board from './Board'

const style = {
  textAlign: 'center',
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
}

function App() {
  return (
    <main style={style}>
      <Board/>
    </main>
  );
}

export default App;
