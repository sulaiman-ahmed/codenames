// src/App.tsx
import React, { useState } from 'react';
import LandingModal from './components/LandingModal';
import GameBoard from './components/Gameboard';
import './App.css';

interface User {
  name: string;
  team: 'red' | 'blue';
  role: 'CodeMaster' | 'CodeGuesser';
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleStartGame = (name: string, team: 'red' | 'blue', role: 'CodeMaster' | 'CodeGuesser') => {
    setUser({ name, team, role });
  };

  return (
    <div className="App">
      <LandingModal isOpen={!user} onClose={handleStartGame} />
      {user && <GameBoard user={user} />}
    </div>
  );
};

export default App;
