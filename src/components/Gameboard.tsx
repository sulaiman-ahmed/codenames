import React, { useState, useEffect } from 'react';
import Card from './Card';

const cardTypes = [
  'red', 'red', 'red', 'red', 'red',
  'blue', 'blue', 'blue', 'blue', 'blue',
  'neutral', 'neutral', 'neutral', 'neutral', 'neutral',
  'neutral', 'neutral', 'neutral', 'neutral', 'neutral',
  'assassin'
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<{ word: string; type: string }[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch('wordlist.txt');
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
          type={card.type}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
