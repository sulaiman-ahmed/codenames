import React from 'react';
import GameBoard from './components/Gameboard';
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Codenames Game</h1>
      <GameBoard />
    </div>
  );
};

export default App;