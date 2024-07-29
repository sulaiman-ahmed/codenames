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
      case 'pale':
        return 'lightyellow';
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
        padding: '5px',
        margin: '2px',
        textAlign: 'center',
        width: '70px',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '0.8rem',
      }}
    >
      {word}
    </div>
  );
};

export default Card;
