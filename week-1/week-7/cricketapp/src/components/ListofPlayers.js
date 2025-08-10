import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 82 },
    { name: "Rohit Sharma", score: 45 },
    { name: "KL Rahul", score: 66 },
    { name: "Hardik Pandya", score: 71 },
    { name: "Rishabh Pant", score: 54 },
    { name: "Shikhar Dhawan", score: 73 },
    { name: "Jasprit Bumrah", score: 22 },
    { name: "Ravindra Jadeja", score: 69 },
    { name: "Bhuvneshwar Kumar", score: 30 },
    { name: "Yuzvendra Chahal", score: 15 },
    { name: "Mohammed Shami", score: 25 },
  ];

  // Filter using arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>Players with Score below 70</h2>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
