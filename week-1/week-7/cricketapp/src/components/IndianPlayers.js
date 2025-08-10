import React from "react";

function IndianPlayers() {
  const T20players = ["Virat", "Rohit", "Pant"];
  const RanjiPlayers = ["Pujara", "Rahane", "Shami"];

  // Destructuring
  const [odd1, even1, odd2] = T20players;
  const [even2, odd3, even3] = RanjiPlayers;

  // Merge arrays using ES6 spread
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd & Even Team Players</h2>
      <p>Odd Players: {odd1}, {odd2}, {odd3}</p>
      <p>Even Players: {even1}, {even2}, {even3}</p>

      <h2>Merged Players</h2>
      <ul>
        {mergedPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
