import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Kohli", score: 85 },
    { name: "Rohit", score: 65 },
    { name: "Dhoni", score: 90 },
    { name: "Hardik", score: 55 },
    { name: "Gill", score: 75 },
    { name: "Rahul", score: 60 },
    { name: "Jadeja", score: 95 },
    { name: "Shami", score: 45 },
    { name: "Bumrah", score: 80 },
    { name: "Surya", score: 88 },
    { name: "Pant", score: 50 },
  ];

  const lowScorers = players.filter(p => p.score < 70); 

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Low Scorers (below 70)</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
