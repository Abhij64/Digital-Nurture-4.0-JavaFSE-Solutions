import React from 'react';

const IndianPlayers = () => {
  const players = ["Kohli", "Rohit", "Dhoni", "Hardik", "Gill", "Rahul"];
  
  const oddPlayers = players.filter((_, idx) => idx % 2 !== 0);
  const evenPlayers = players.filter((_, idx) => idx % 2 === 0);

  const T20players = ["Rishabh", "Surya"];
  const RanjiPlayers = ["Pujara", "Rahane"];
  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>Merged Team</h2>
      <ul>
        {allPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
