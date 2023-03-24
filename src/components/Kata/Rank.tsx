import React from 'react';

const rankColors: { [key: number]: string } = {
  8: 'white',
  7: 'white',
  6: 'yellow',
  5: 'yellow',
  4: 'blue',
  3: 'blue',
  2: 'purple',
  1: 'purple',
};

export const Rank = ({ rank }: { rank: string }) => {
  return (
    <div className={`rank ${rankColors[Number.parseInt(rank)]}`}>
      <div className="rank__inner">
        <span>{rank}</span>
      </div>
    </div>
  );
};
