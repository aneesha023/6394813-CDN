import React from "react";

export default function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Browse flight details. Please login to book tickets.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
