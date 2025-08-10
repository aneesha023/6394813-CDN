import React from "react";

function App() {
  const heading = <h1>Office Space Rental</h1>;
  const officeImage = "https://via.placeholder.com/600x200?text=Office+Space";

  const offices = [
    { name: "Cyber Towers", rent: 55000, address: "Hyderabad" },
    { name: "Mindspace", rent: 75000, address: "Bengaluru" },
    { name: "DLF Cyber City", rent: 65000, address: "Gurgaon" },
    { name: "Raheja IT Park", rent: 45000, address: "Pune" }
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      {heading}
      <img src={officeImage} alt="Office" style={{ width: "100%", maxWidth: 600 }} />
      <h2>Office Listings</h2>
      <ul>
        {offices.map((o, idx) => (
          <li key={idx} style={{ marginBottom: 10 }}>
            <strong>{o.name}</strong> —{" "}
            <span style={{ color: o.rent < 60000 ? "red" : "green" }}>
              ₹{o.rent}
            </span>
            {" "}({o.address})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
