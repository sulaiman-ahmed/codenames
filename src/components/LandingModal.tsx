// src/components/LandingModal.tsx
import React, { useState } from 'react';
import './LandingModal.css';

interface LandingModalProps {
  isOpen: boolean;
  onClose: (name: string, team: 'red' | 'blue', role: 'CodeMaster' | 'CodeGuesser') => void;
}

const LandingModal: React.FC<LandingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [team, setTeam] = useState<'red' | 'blue'>('red');
  const [role, setRole] = useState<'CodeMaster' | 'CodeGuesser'>('CodeGuesser');

  const handleSubmit = () => {
    if (name.trim()) {
      onClose(name, team, role);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Enter your details</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="red"
              checked={team === 'red'}
              onChange={() => setTeam('red')}
            />
            Red Team
          </label>
          <label>
            <input
              type="radio"
              value="blue"
              checked={team === 'blue'}
              onChange={() => setTeam('blue')}
            />
            Blue Team
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="CodeMaster"
              checked={role === 'CodeMaster'}
              onChange={() => setRole('CodeMaster')}
            />
            CodeMaster
          </label>
          <label>
            <input
              type="radio"
              value="CodeGuesser"
              checked={role === 'CodeGuesser'}
              onChange={() => setRole('CodeGuesser')}
            />
            CodeGuesser
          </label>
        </div>
        <button onClick={handleSubmit}>Start Game</button>
      </div>
    </div>
  );
};

export default LandingModal;
