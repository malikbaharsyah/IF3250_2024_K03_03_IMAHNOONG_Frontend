import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  initialRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            fontSize: '1.5rem',
            color: i <= rating ? 'gold' : 'lightgray',
            cursor: 'pointer',
          }}
        >
          ★
        </span>
      );
    }
  
    return <div>{stars}</div>;
  };
  
  export default StarRating;