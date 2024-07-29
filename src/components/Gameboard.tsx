import React, { useState, useEffect } from 'react';
import Card from './Card';

const cardTypes = [
  'red', 'red', 'red', 'red', 'red',
  'blue', 'blue', 'blue', 'blue', 'blue',
  'neutral', 'neutral', 'neutral', 'red', 'red',
  'neutral', 'neutral', 'neutral', 'neutral', 'blue',
  'assassin', 'red', 'red', 'blue', 'blue'
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface GameBoardProps {
  user: {
    name: string;
    team: 'red' | 'blue';
    role: 'CodeMaster' | 'CodeGuesser';
  };
}

const GameBoard: React.FC<GameBoardProps> = ({ user }) => {
  const [cards, setCards] = useState<{ word: string; type: string }[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch('/wordlist.txt');
        const text = await response.text();
        const words = text.split('\n').map(word => word.trim()).filter(word => word);
        const shuffledWords = shuffleArray(words).slice(0, 25);
        const shuffledTypes = shuffleArray([...cardTypes]);

        setCards(
          shuffledWords.map((word, index) => ({
            word,
            type: shuffledTypes[index],
          }))
        );
      } catch (error) {
        console.error('Error fetching the word list:', error);
      }
    };

    fetchWords();
  }, []);

  const handleCardClick = (index: number) => {
    console.log(`Card clicked: ${cards[index].word}`);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', justifyContent: 'center' }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          word={card.word}
          type={user.role === 'CodeMaster' ? card.type : 'pale'}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
