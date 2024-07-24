import React from 'react';

interface CardProps {
  word: string;
  type: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ word, type, onClick }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'red':
        return 'lightcoral';
      case 'blue':
        return 'lightblue';
      case 'neutral':
        return 'lightgray';
      case 'assassin':
        return 'black';
      default:
        return 'white';
    }
  };

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: getBackgroundColor(),
        color: type === 'assassin' ? 'white' : 'black',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        margin: '5px',
        textAlign: 'center',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {word}
    </div>
  );
};

export default Card;
