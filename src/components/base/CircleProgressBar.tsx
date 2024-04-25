import React from 'react';

interface CricleProgressBarProps {
    percentage: number;
  }

const CircularProgress: React.FC<CricleProgressBarProps> = ({ percentage }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="60" height="60">
      <circle
        stroke="grey"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="30"
        cy="30"
      />
      <circle
        stroke="purple"
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx="30"
        cy="30"
        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
      />
    </svg>
  );
};

export default CircularProgress;
